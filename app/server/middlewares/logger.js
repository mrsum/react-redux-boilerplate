'use strict';

/**
 * Logger middleware
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
export default async function(ctx, next) {
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    try {
      console.log(`${ctx.method}: ${ctx.originalUrl}`);
      await next(); // next is now a function
    } catch (err) {
      let error = { message: err.message, stack: err.stack, line: err.line };
      console.error(error);
      ctx.body = error;
      ctx.status = err.status || 500;
    }
  } else {
    await next();  
  }
};
