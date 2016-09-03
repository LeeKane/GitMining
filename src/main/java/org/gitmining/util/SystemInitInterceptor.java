package org.gitmining.util;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Repository;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by mac on 16/9/3.
 */
public class SystemInitInterceptor implements HandlerInterceptor {

    @Override
    public void afterCompletion(HttpServletRequest arg0,
                                HttpServletResponse arg1, Object arg2, Exception arg3)
            throws Exception {

    }

    @Override
    public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1,
                           Object arg2, ModelAndView arg3) throws Exception {

    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
                             Object arg2) throws Exception {

        //获取url地址
        String reqUrl=request.getRequestURI().replace(request.getContextPath(), "");
        //当url地址为登录的url的时候拦截器
        if(!reqUrl.contains("/login")){
            System.out.print("sssssss");
            return true;
        }else{
            HttpSession session=request.getSession();
            Object obj=session.getAttribute("username");
            if(obj!=null||!"".equals(obj.toString())){
                response.sendRedirect("/person");
            }
        }
        return true;
    }



}
