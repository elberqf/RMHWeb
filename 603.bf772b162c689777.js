"use strict";(self.webpackChunkRMHWebApp=self.webpackChunkRMHWebApp||[]).push([[603],{1603:(y,c,o)=>{o.r(c),o.d(c,{AdminModule:()=>A});var l=o(6895),s=o(9197),m=o(5815),t=o(4650),u=o(7517),g=o(3894),h=o(629),f=o(7392),p=o(4859),d=o(1561);let C=(()=>{class n{constructor(e,r){this.router=e,this.authService=r,this.auth=new g.g,this.auth=r.getAuthorization()}ngOnInit(){}logout(){this.authService.logout(),this.router.navigate(["/auth"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.F0),t.Y36(h.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["nav-bar"]],decls:23,vars:3,consts:[[1,"notifications"],["mat-icon-button","","color","primary"],["matBadge","7","matBadgePosition","before","matBadgeSize","small","matBadgeColor","accent"],[1,"user"],[1,"photo"],["src","https://i.pinimg.com/474x/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg","alt","profile photo"],[1,"data"],[1,"name"],[1,"mail"],[1,"action"],["mat-icon-button","","color","primary",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],["color","warn"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"button",1)(2,"mat-icon",2),t._uU(3,"notifications_none_outlined"),t.qZA()()(),t.TgZ(4,"div",3)(5,"div",4),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"div",6)(8,"div",7),t._uU(9),t.qZA(),t.TgZ(10,"div",8),t._uU(11),t.qZA()(),t.TgZ(12,"div",9)(13,"button",10)(14,"mat-icon"),t._uU(15,"keyboard_arrow_down_outlined"),t.qZA()(),t.TgZ(16,"mat-menu",null,11)(18,"button",12),t.NdJ("click",function(){return r.logout()}),t.TgZ(19,"mat-icon",13),t._uU(20,"logout"),t.qZA(),t.TgZ(21,"span"),t._uU(22,"Logout"),t.qZA()()()()()),2&e){const a=t.MAs(17);t.xp6(9),t.Oqu(r.auth.user),t.xp6(2),t.Oqu(r.auth.mail),t.xp6(2),t.Q6J("matMenuTriggerFor",a)}},dependencies:[f.Hw,p.lW,d.VK,d.OP,d.p6],styles:['[_nghost-%COMP%]{display:grid;grid-template-columns:1fr auto auto;grid-template-areas:"none notifications user";gap:1rem;font-family:Inter;background:#fdfeff}[_nghost-%COMP%]   .notifications[_ngcontent-%COMP%]{grid-area:notifications;display:grid;align-items:center;overflow:hidden}[_nghost-%COMP%]   .user[_ngcontent-%COMP%]{grid-area:user;display:grid;grid-template-columns:repeat(4,auto);align-items:center;padding:0 .5rem}[_nghost-%COMP%]   .user[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{width:2.3rem;height:2.3rem}[_nghost-%COMP%]   .user[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;border-radius:50%;overflow:hidden;width:100%;height:100%;object-fit:contain}[_nghost-%COMP%]   .user[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{padding-left:.5rem}[_nghost-%COMP%]   .user[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1rem;color:#448aff}[_nghost-%COMP%]   .user[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]{font-size:.8rem;color:#487cff;cursor:pointer}[_nghost-%COMP%]   .user[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{color:#505665}']}),n})();const M=["*"];let v=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["content-body"]],ngContentSelectors:M,decls:1,vars:0,template:function(e,r){1&e&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{padding:3rem;overflow-y:auto;background:#f5f7ff;border-top:solid .1rem rgba(0,0,0,0);transition:border-top .5s}[_nghost-%COMP%]::-webkit-scrollbar{width:.5rem;height:.5rem}[_nghost-%COMP%]::-webkit-scrollbar-track{background:rgba(0,0,0,.1019607843)}[_nghost-%COMP%]::-webkit-scrollbar-thumb{background:rgba(0,0,0,.3333333333);border-radius:1rem}[_nghost-%COMP%]::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.4666666667)}[scrolled=true][_nghost-%COMP%]{border-top:solid .1rem #d0daff}@media (max-width: 600px){[_nghost-%COMP%]{padding:1rem;overflow-y:auto;background:#f5f7ff;border-top:solid .1rem rgba(0,0,0,0);transition:border-top .5s}}"]}),n})();const O=[{path:"",component:(()=>{class n{constructor(){this.sections=[{title:"App",menus:[{icon:"fas fa-grip-horizontal",description:"Home",route:"/admin"},{icon:"fa-solid fa-laptop-file",description:"Queries",route:"/admin/queries",children:[{description:"Search Item",route:"/admin/queries/search-item"}]},{icon:"fa-solid fa-gear",description:"Config",route:"/admin/config",children:[{description:"Item",route:"/admin/config/item"}]}]}]}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin"]],decls:5,vars:2,consts:[[3,"sections"],["outlet","outlet"]],template:function(e,r){if(1&e&&(t._UZ(0,"side-nav",0)(1,"nav-bar"),t.TgZ(2,"content-body"),t._UZ(3,"router-outlet",null,1),t.qZA()),2&e){const a=t.MAs(4);t.Q6J("sections",r.sections),t.xp6(2),t.Q6J("@slideAnimation",a.isActivated?a.activatedRoute:"")}},dependencies:[s.lC,u.s,C,v],styles:["[_nghost-%COMP%]{height:100vh;width:100%;background-color:#f9f8fc;display:grid;grid-template-columns:auto 1fr;grid-template-rows:3.5rem 1fr}[_nghost-%COMP%]   side-nav[_ngcontent-%COMP%]{grid-row:1/-1}"],data:{animation:[m.c]}}),n})(),children:[{path:"queries",loadChildren:()=>Promise.all([o.e(592),o.e(58)]).then(o.bind(o,9058)).then(n=>n.QueriesModule)},{path:"config/item",loadChildren:()=>Promise.all([o.e(592),o.e(779)]).then(o.bind(o,7779)).then(n=>n.ItemModule)},{path:"**",loadChildren:()=>Promise.all([o.e(592),o.e(58)]).then(o.bind(o,9058)).then(n=>n.QueriesModule)}]}];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(O),s.Bz]}),n})();var b=o(3466);let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,P,b.m]}),n})()}}]);