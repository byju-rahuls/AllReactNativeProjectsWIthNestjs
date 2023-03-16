import { Controller, Get, HttpCode, Req, Res,Post, Header, Redirect, Param, Body, Query, HostParam, Optional } from "@nestjs/common";
import { of } from "rxjs";

@Controller()
export class AppController{
      
    @Post('/user/:id/:an')
    @HttpCode(78)
    @Header('ab','f')
    @Redirect('/',324)
    getUser(@Req() req:any,@Res() res)
    {
       return {
        url:"asdf",
        statusCode:'302'
       }
    }

    
}