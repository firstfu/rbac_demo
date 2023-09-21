/**
 * @ Author: firstfu
 * @ Create Time: 2023-09-21 17:19:31
 * @ Description: RBAC
 */

/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('/rbac')
export class RbacController {
  /**
   * 測試用
   * @returns
   */
  @Get('/test')
  async test() {
    return '測試用RBAC';
  }
}
