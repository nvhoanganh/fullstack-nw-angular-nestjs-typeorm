import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  private tokenType;

  constructor(private readonly jwtService: JwtService) {
    this.tokenType = "bearer";
  }

  public generateTokenJwt(
    payload: object,
    expiresIn: number,
  ) {
    const accessToken = this.jwtService.sign(payload);

    return {
      access_token: accessToken,
      token_type: this.tokenType,
      refresh_token: "",
      expires_in: expiresIn,
    };
  }
}
