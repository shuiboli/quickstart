/*文件命名约定是：服务名称的小写形式（基本名），加上.service后缀 */

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//把这个类命名为HeroService，并导出它，以供别人使用。

/*当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。 
如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。 */
@Injectable()  //不要忘了写圆括号！如果忘了写，就会导致一个很难诊断的错误。

/*
    HeroService会生成一个承诺.
    请求一个异步服务去做点什么，并且给它一个回调函数。 它会去做（在某个地方），
    一旦完成，它就会调用我们的回调函数，并通过参数把工作结果或者错误信息传给我们。
*/
export class HeroService {
   //通过返回一个 立即解决的承诺 的方式，模拟了一个超快、零延迟的超级服务器。
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    //模拟慢速连接
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }


}
