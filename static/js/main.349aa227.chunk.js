(this["webpackJsonpreact-crop-component"]=this["webpackJsonpreact-crop-component"]||[]).push([[0],{10:function(e,l,n){},11:function(e,l,n){"use strict";n.r(l);var t=n(0),r=n.n(t),c=n(1),a=n.n(c),i=(n(10),n(2)),o=n(4),y=n.n(o),m=function(e){var l=e.children,n=e.selector,r=e.onLoad;return Object(t.useEffect)((function(){r()}),[]),Object(c.createPortal)(l,n)},s=function(e){e.modalClassName;var l=e.portalId,n=void 0===l?"canvas-portal":l,c=e.Component,a=e.canvasConfigs,o=e.imgStyle,s=e.buttonGroupStyle,x=void 0===s?{display:"flex",alignItems:"center",justifyContent:"space-between"}:s,f=e.buttonStyle,p=void 0===f?{padding:8,margin:8,background:"#273CAF",color:"#fff",border:"none",outline:"none"}:f,E=e.filename,d=void 0===E?"download.png":E,u=e.modalStyle,h=void 0===u?{position:"fixed",left:0,top:0,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",bottom:0,right:0,background:"rgba(3, 2, 38, 0.8)",zIndex:9999}:u,g=e.downloadStyle,v=void 0===g?{padding:8,margin:8,background:"#36C2CE",color:"#fff"}:g,C=e.DownloadButton,w=void 0===C?function(e){var l=e.canvasElement,n=e.onClick;return r.a.createElement("a",{onClick:n,href:l&&l.toDataURL(),download:d,style:v},"DOWNLOAD")}:C,b=e.CancelButton,k=void 0===b?function(e){var l=e.onClick;return r.a.createElement("button",{style:p,onClick:l},"CANCEL")}:b,L=e.CropButton,O=void 0===L?function(e){var l=e.onClick;return r.a.createElement("button",{style:p,onClick:l},"CROP COMPONENT")}:L,j=Object(t.useState)(!1),S=Object(i.a)(j,2),I=S[0],B=S[1],M=Object(t.useState)(null),D=Object(i.a)(M,2),z=D[0],F=D[1],N=document.getElementById(n);return N.style="position: fixed;top: 100%",r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{onClick:function(){return B(!0)}}),I&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{onLoad:function(){return y()(N,a).then((function(e){F(e)}))},selector:N,children:z?null:r.a.createElement(c,null)}),z&&r.a.createElement("div",{style:h},r.a.createElement("img",{style:o,src:z&&z.toDataURL(),alt:"Cropped Component"}),r.a.createElement("div",{style:x},r.a.createElement(k,{onClick:function(){B(!1),F(null)}}),r.a.createElement(w,{canvasElement:z,onClick:function(){F(null),B(!1)}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"250",height:"65",viewBox:"0 0 250 65"},r.a.createElement("path",{fill:"none",d:"M2.4752 43.276L6.2049 38.3748 9.2722 50.0981 13.9894 49.981 20.8212 50.4427 26.9792 48.8778 33.3927 50.3473 39.2485 35.0389 44.2446 34.593 49.0548 25.2335 53.9346 19.1864 57.978 32.5882 60.9523 33.5998 64.3915 35.9743 69.7826 37.4412 73.4309 34.4032 77.6136 43.8493 82.3076 50.9949 88.8606 49.0626 93.8101 47.9904 99.5033 51.5374 106.4513 51.449 112.7254 39.1151 116.6526 46.1621 123.5541 47.552 130.1071 52.0253 136.7065 42.799 140.0527 33.1222 145.8853 27.0635 149.7892 23.1786 155.2268 32.7712 159.456 30.7286 162.6395 31.6751 168.1933 20.1417 174.0491 13.7688 177.7207 20.1799 181.7407 14.3556 188.8049 5.8076 192.8715 3.0306 196.543 0.9127 200.261 0.6372 204.0487 5.9261 207.8829 7.5689 213.1578 12.7221 218.1771 18.3277 222.0578 21.6281 228.4016 12.2843 232.5379 18.3287 237.3248 14.7651 242.437 19.9102 247.5493 21.1571"}),r.a.createElement("path",{fill:"none",d:"M247.5493 64.3564L2.4752 64.3564"}),r.a.createElement("path",{fill:"#36C2CE",fillOpacity:"0.098",d:"M247.5493 64.3564L2.4752 64.3564 2.4752 43.276 6.2049 38.3748 9.2722 50.0981 13.9894 49.981 20.8212 50.4427 26.9792 48.8778 33.3927 50.3473 39.2485 35.0389 44.2446 34.593 49.0548 25.2335 53.9346 19.1864 57.978 32.5882 60.9523 33.5998 64.3915 35.9743 69.7826 37.4412 73.4309 34.4032 77.6136 43.8493 82.3076 50.9949 88.8606 49.0626 93.8101 47.9904 99.5033 51.5374 106.4513 51.449 112.7254 39.1151 116.6526 46.1621 123.5541 47.552 130.1071 52.0253 136.7065 42.799 140.0527 33.1222 145.8853 27.0635 149.7892 23.1786 155.2268 32.7712 159.456 30.7286 162.6395 31.6751 168.1933 20.1417 174.0491 13.7688 177.7207 20.1799 181.7407 14.3556 188.8049 5.8076 192.8715 3.0306 196.543 0.9127 200.261 0.6372 204.0487 5.9261 207.8829 7.5689 213.1578 12.7221 218.1771 18.3277 222.0578 21.6281 228.4016 12.2843 232.5379 18.3287 237.3248 14.7651 242.437 19.9102 247.5493 21.1571z"}),r.a.createElement("ellipse",{cx:"2.475",cy:"43.276",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"6.205",cy:"38.375",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"9.272",cy:"50.098",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"13.989",cy:"49.981",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"20.821",cy:"50.443",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"26.979",cy:"48.878",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"33.393",cy:"50.347",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"39.248",cy:"35.039",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"44.245",cy:"34.593",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"49.055",cy:"25.233",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"53.935",cy:"19.186",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"57.978",cy:"32.588",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"60.952",cy:"33.6",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"64.391",cy:"35.974",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"69.783",cy:"37.441",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"73.431",cy:"34.403",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"77.614",cy:"43.849",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"82.308",cy:"50.995",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"88.861",cy:"49.063",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"93.81",cy:"47.99",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"99.503",cy:"51.537",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"106.451",cy:"51.449",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"112.725",cy:"39.115",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"116.653",cy:"46.162",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"123.554",cy:"47.552",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"130.107",cy:"52.025",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"136.707",cy:"42.799",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"140.053",cy:"33.122",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"145.885",cy:"27.064",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"149.789",cy:"23.179",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"155.227",cy:"32.771",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"159.456",cy:"30.729",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"162.639",cy:"31.675",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"168.193",cy:"20.142",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"174.049",cy:"13.769",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"177.721",cy:"20.18",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"181.741",cy:"14.356",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"188.805",cy:"5.808",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"192.871",cy:"3.031",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"196.543",cy:"0.913",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"200.261",cy:"0.637",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"204.049",cy:"5.926",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"207.883",cy:"7.569",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"213.158",cy:"12.722",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"218.177",cy:"18.328",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"222.058",cy:"21.628",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"228.402",cy:"12.284",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"232.538",cy:"18.329",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"237.325",cy:"14.765",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"242.437",cy:"19.91",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"247.549",cy:"21.157",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"247.549",cy:"64.356",fill:"none",rx:"3",ry:"3"}),r.a.createElement("ellipse",{cx:"2.475",cy:"64.356",fill:"none",rx:"3",ry:"3"}),r.a.createElement("path",{fill:"none",stroke:"#36C2CE",strokeLinejoin:"bevel",d:"M2.4752 43.276L6.2049 38.3748 9.2722 50.0981 13.9894 49.981 20.8212 50.4427 26.9792 48.8778 33.3927 50.3473 39.2485 35.0389 44.2446 34.593 49.0548 25.2335 53.9346 19.1864 57.978 32.5882 60.9523 33.5998 64.3915 35.9743 69.7826 37.4412 73.4309 34.4032 77.6136 43.8493 82.3076 50.9949 88.8606 49.0626 93.8101 47.9904 99.5033 51.5374 106.4513 51.449 112.7254 39.1151 116.6526 46.1621 123.5541 47.552 130.1071 52.0253 136.7065 42.799 140.0527 33.1222 145.8853 27.0635 149.7892 23.1786 155.2268 32.7712 159.456 30.7286 162.6395 31.6751 168.1933 20.1417 174.0491 13.7688 177.7207 20.1799 181.7407 14.3556 188.8049 5.8076 192.8715 3.0306 196.543 0.9127 200.261 0.6372 204.0487 5.9261 207.8829 7.5689 213.1578 12.7221 218.1771 18.3277 222.0578 21.6281 228.4016 12.2843 232.5379 18.3287 237.3248 14.7651 242.437 19.9102 247.5493 21.1571"}),r.a.createElement("path",{fill:"none",d:"M0 0L250 0 250 65 0 65z"}))};var f=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:48,height:48,viewBox:"0 0 1024 1024",fill:"none"},r.a.createElement("path",{fill:"#1B1F23",fillRule:"evenodd",d:"M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z",clipRule:"evenodd"}))},p=function(e){var l=e.title,n=void 0===l?"Hi, Crop Me":l;return r.a.createElement("h1",{style:{backgroundColor:"#061A40",color:"#fff",width:250,height:250,fontSize:32,display:"flex",justifyContent:"center",alignItems:"center",margin:0}},n)};a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},r.a.createElement("a",{href:"https://github.com/ozluy/react-component2canvas",style:{position:"absolute",right:8,top:8}},r.a.createElement(f,null)),r.a.createElement(p,null),r.a.createElement(s,{portalId:"crop-portal",canvasConfigs:{width:250,height:250,innerWidth:250,innerHeight:250},imgStyle:{width:250,height:250},Component:p}),r.a.createElement(x,null),r.a.createElement(s,{portalId:"crop-portal",canvasConfigs:{width:250,height:65,innerWidth:250,innerHeight:65,backgroundColor:"transparent"},imgStyle:{width:250,height:65},Component:x})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,l,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.349aa227.chunk.js.map