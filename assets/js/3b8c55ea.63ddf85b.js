"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[217],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=s(a),h=r,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||o;return a?n.createElement(m,i(i({ref:e},d),{},{components:a})):n.createElement(m,i({ref:e},d))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9250:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],l={id:"installation",title:"Installating RatOS",sidebar_label:"Installation",sidebar_position:1},p="Installation",s={unversionedId:"installation",id:"installation",title:"Installating RatOS",description:"Raspberry Pi Installation",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/Rat-OS/RatOS/edit/master/site/docs/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"installation",title:"Installating RatOS",sidebar_label:"Installation",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Initial Configuration",permalink:"/docs/configuration"}},d=[{value:"Raspberry Pi Installation",id:"raspberry-pi-installation",children:[{value:"WIFI (Optional)",id:"wifi-optional",children:[],level:3}],level:2},{value:"Preparing your control board",id:"preparing-your-control-board",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Updating",id:"updating",children:[],level:2}],u={toc:d};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"raspberry-pi-installation"},"Raspberry Pi Installation"),(0,o.kt)("p",null,"Download the newest release (download the RatOS-","*",".zip file under the assets dropdown) of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Rat-Os/RatOS/releases"},"RatOS on github"),".\nThen use ",(0,o.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"Balena Etcher")," to write that image to the SD card that goes into your raspberry pi (8GB or larger)."),(0,o.kt)("p",null,"Note: this will destroy all data on the card!"),(0,o.kt)("a",{class:"button button--primary",href:"https://github.com/Rat-Os/RatOS/releases"},"Download RatOS"),(0,o.kt)("h3",{id:"wifi-optional"},"WIFI (Optional)"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Do ",(0,o.kt)("strong",{parentName:"p"},"NOT")," use a textprocessor such as Wordpad, it will mangle the file and your pi won't boot. Notepad, Notepad++, VSCode are all fine."))),(0,o.kt)("p",null,"When the process is complete, find the ",(0,o.kt)("inlineCode",{parentName:"p"},"/boot")," volume / folder on the sd card. If you're having trouble finding the boot volume, try reinserting the SD card into your PC. Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"ratos-wpa-supplicant.txt")," file found on the boot volume in a text editor and fill out your wifi information. ",(0,o.kt)("strong",{parentName:"p"},"Remember to change the country code at the bottom of the file.")),(0,o.kt)("h2",{id:"preparing-your-control-board"},"Preparing your control board"),(0,o.kt)("p",null,"When the RatOS image has been written to the SD card and you've configured your wifi settings, insert the SD card into the Raspberry Pi and turn on the Pi. Wait a couple of minutes, then open ",(0,o.kt)("a",{parentName:"p",href:"http://ratos.local/"},"http://RatOS.local/")," in your browser. This will present you with the mainsail interface. On the left there's a menu option named \"Machine\", click on that, and you'll see a list of files and folders. There's a folder here called \"firmware_binaries\", open that folder. You can download the firmware binary for your board from here. Let's move on to the preparation of the control board."),(0,o.kt)("p",null,"See the documentation for your specific board."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/octopus-11"},"BIGTREETECH Octopus v1.1")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/octopus-pro-446"},"BIGTREETECH Octopus Pro 446")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/octopus-pro-429"},"BIGTREETECH Octopus Pro 429")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/skr-pro-12"},"BIGTREETECH SKR Pro v1.2")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/skr-2-429"},"BIGTREETECH SKR 2")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/fysetc/spider-11"},"Fysetc Spider v1.1")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"With the control board connected via USB to your Raspberry Pi and the printer turned on, open your browser and navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://RatOS.local"},"http://RatOS.local/")," and proceed to the ",(0,o.kt)("a",{parentName:"p",href:"configuration"},"configuration guide"),"."),(0,o.kt)("h2",{id:"updating"},"Updating"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is important that you ",(0,o.kt)("strong",{parentName:"p"},"don't")," update the klipper package ",(0,o.kt)("em",{parentName:"p"},"before")," your board connects correctly, because firmware updates will not compile or flash automatically before your board is properly flashed and connected."))),(0,o.kt)("p",null,"After you've configured your printer.cfg and everything is working, go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"MACHINE")," tab in Mainsail. You'll see a sheet with the title \"Update Manager\", if you're familiar with Fluidd or Mainsail, you'll notice a new entry called ",(0,o.kt)("inlineCode",{parentName:"p"},"RatOS"),". This ",(0,o.kt)("inlineCode",{parentName:"p"},"RatOS")," package will update all the config files in the config folder, improvements, support for hotends, macros, extruders, new boards etc, will be coming to your printer this way in the future. ",(0,o.kt)("strong",{parentName:"p"},"Be sure to keep this up to date, especially if you update klipper or moonraker"),". Always update the RatOS package first, before updating anything else. This is important because Klipper and Moonraker sometimes make changes that require manual system or configuration changes which RatOS will try to do for you."),(0,o.kt)("p",null,"In general, it's advisable to keep all your packages up to date, but if you're happy with how your printer works and there's nothing interesting for you in the updates, it's perfectly fine to delay updating until a later time. Klipper is a continually evolving project, that also means that bugs ",(0,o.kt)("em",{parentName:"p"},"do happen"),". In the rare circumstance that bugs are introduced, they're usually fixed very quickly, but if you have a bunch of important prints coming up, maybe delay the updates till afterwards. Now that we've gotten that out of the way, ",(0,o.kt)("strong",{parentName:"p"},"please go ahead and update RatOS to the latest version"),"."))}c.isMDXComponent=!0}}]);