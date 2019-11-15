"use strict"
var brd = brd || {};
brd =(()=>{
	    let _, js,css,img, brd_vuejs, navi_js, cookie_js,cname,cid,cnum,navivue_js,router_js,routerInfo,page_js,pagevue_js,compovue_js,proxyjs 
	    let init = ()=>{
	       _= '/web'
	        js = _+'/resources/js'
	        css = _+'/resources/css'
	        img = _+'/resources/img'
	       brd_vuejs = js+'/vue/brd_vue.js'
	       navi_js = js+'/cmm/navi.js'
	       navivue_js = js+'/vue/navi_vue.js'
	       cookie_js = js+'/cmm/cookie.js'
	       router_js =  js+'/cmm/router.js'
	       page_js = js+'/cmm/pagination.js'
	       pagevue_js=  js+'/vue/page_vue.js'
	       compovue_js=  js+'/vue/compo_vue.js'
	        proxyjs = js+'/cmm/proxy.js'	        
	   }
	    let onCreate =()=>{
			init();
			$.getScript(brd_vuejs)
			setContentView();
			contentList();
		}
		
		let setContentView = ()=>{
			$('head').html(brd_vue.brd_head({css , img, js}))
		}
		
		let navigation =()=>{
			navi.onCreate()
		}
		
		let contentList = () =>{
			$('body').html(brd_vue.cgv_brd())
			$('#recent div[class="media text-muted pt-3"]').remove()
			$('#recent small[class="d-block text-right mt-3"]').remove()
			$.ajax({
				url : '/web/hr/cgv', 
				type : 'GET',
				contentType : 'application/json',
				success : d =>{
					$.each(d.cgv, ( i , j)=>{
						$('<div>',{
							href : '#'
						})
						.append(brd_vue.cgv_rank_brd(j))
						.appendTo('.row')			
						.click(e=>{
							e.preventDefault()
						})
					})// each
			},
			error : e =>{
			}
			})
		}// contentList		
		
		return { onCreate  ,contentList};
})();