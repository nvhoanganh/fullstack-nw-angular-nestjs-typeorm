#  install Helm
choco install kubernetes-helm

# delete tiller deploy first?
# kubectl -n kube-system delete deploy tiller-deploy
# init helm on the Azure cluster
helm init
# update helm repo
helm repo update

# create service account for helm tiller
kubectl create serviceaccount --namespace kube-system tiller
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
kubectl patch deploy --namespace kube-system tiller-deploy -p '{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}'


# download istio from https://github.com/istio/istio/releases and add istioctl into your PATH
# install istio into your k8s cluster using helm, enalbe kiali, grafana, tracing
# from the location where you download istio from

cd /c/istio-1.2.2-win/istio-1.2.2
kubectl create ns istio-system
helm template install/kubernetes/helm/istio --name istio --namespace istio-system --set kiali.enabled=true --set grafana.enabled=true --set tracing.enabled=true --set global.configValidation=false > $HOME/istio.yaml
kubectl apply -f $HOME/istio.yaml
# enable grafana and jaeger
# helm upgrade --recreate-pods --namespace istio-system --set kiali.enabled=true --set grafana.enabled=true --set tracing.enabled=true --set global.configValidation=false --set sidecarInjectorWebhook.enabled=false istio install/kubernetes/helm/istio
helm install install/kubernetes/helm/istio --name istio --namespace istio-system --set kiali.enabled=true --set grafana.enabled=true --set tracing.enabled=true --set global.configValidation=false
# make sure istio is now installed (kiali, zipkin, prometheus, grafana)
kubectl get svc -n istio-system
kubectl get pods -n istio-system

# make sure automatic istio side car injection is enabled for staging and prod https://istio.io/docs/setup/kubernetes/sidecar-injection/#automatic-sidecar-injection
kubectl label namespace default istio-injection=enabled

# cd into the root of the Git repo
cd /c/AnthonyNguyenData/source/personal/rbus-docker


# create configMap
kubectl.exe create configmap webbffconfigmap --from-file=./src/api-gateway/web.bff/config/configuration.json

# now deploy the app and istio
kubectl.exe apply -f config/k8s/ -f config/istio --record

# get list of pods and make sure there are 2 containers running in each POD (one of them is the istio-proxy)
kubectl.exe get pods

# get details of a pod
kubectl.exe describe pod authentication-service-deploy-5c7874f96d-g6xj4

# get logs from the worker container (your code)
kubectl.exe logs authentication-service-deploy-5c7874f96d-g6xj4 -c worker

# get public IP of Istio ingress
kubectl.exe get svc -n istio-system

# run Grafana and http://localhost:3000/dashboard/db/istio-mesh-dashboard
kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=grafana -o jsonpath='{.items[0].metadata.name}') 3000:3000 &

# run jaeger
kubectl port-forward -n istio-system $(kubectl get pod -n istio-system -l app=jaeger -o jsonpath='{.items[0].metadata.name}') 16686:16686 &

# run kiali
kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=kiali -o jsonpath='{.items[0].metadata.name}') 20001:20001
# open http://localhost:20001 and login with admin:admin

# hit the API continously usig CURL
for i in `seq 1 2000`; do curl http://207.46.228.149/api/auth/users; done


# Clean up
# delete resource group
az.cmd group delete --name rbus-asia
az.cmd group delete --name MC_rbus-asia_rbus_southeastasia

# kubectl apply -f <(istioctl kube-inject -f config/k8s/)>
helm del --purge istio
kubectl delete -f install/kubernetes/helm/istio/templates/crds.yaml -n istio-system
