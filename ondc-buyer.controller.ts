import { NextFunction, Request, Response } from "express";
import { Req, Res } from "routing-controllers";

export class ONDCBuyerController {
  public async search(
    @Req() req: Request,
    @Res() res: Response,
    next: NextFunction
  ) {
    throw new Error("Method Not Implemented");
  }

  public async on_search(
    @Req() req: Request,
    @Res() res: Response,
    next: NextFunction
  ) {
    throw new Error("Method Not Implemented");
  }

  public async select(
    @Req() req: Request,
    @Res() res: Response,
    next: NextFunction
  ) {
    throw new Error("Method Not Implemented");
  }

  public async init(
    @Req() req: Request,
    @Res() res: Response,
    next: NextFunction
  ) {
    throw new Error("Method Not Implemented");
  }

  public async on_init(
    @Req() req: Request,
    @Res() res: Response,
    next: NextFunction
  ) {
    throw new Error("Method Not Implemented");
  }

  public async confirm(
    @Req() req: Request,
    @Res() res: Response,
    next: NextFunction
  ) {
    throw new Error("Method Not Implemented");
  }

  public async on_confirm(
    @Req() req: Request,
    @Res() res: Response,
    next: NextFunction
  ) {
    throw new Error("Method Not Implemented");
  }

  public async status(
    @Req() req: Request,
    @Res() res: Response,
    next: NextFunction
  ) {
    throw new Error("Method Not Implemented");
  }

  public async on_status(
    @Req() req: Request,
    @Res() res: Response,
    next: NextFunction
  ) {
    throw new Error("Method Not Implemented");
  }

  public async update?(
    @Req() req: Request,
    @Res() res: Response,
    next: NextFunction
  ) {
    throw new Error("Method Not Implemented");
  }

  public async on_update?(
    @Req() req: Request,
    @Res() res: Response,
    next: NextFunction
  ) {
    throw new Error("Method Not Implemented");
  }
}
