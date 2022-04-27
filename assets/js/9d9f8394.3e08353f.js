"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[360],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9222:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],p={},l="Troubleshooting",s={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"My steppers are running backwards!",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/Rat-OS/RatOS/edit/master/site/docs/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Slicer Configuration",permalink:"/docs/slicers"},next:{title:"Manual Firmware Compilation",permalink:"/docs/manual-firmware-compilation"}},c=[{value:"My steppers are running backwards!",id:"my-steppers-are-running-backwards",children:[],level:2},{value:"Everytime i update my changes are gone.",id:"everytime-i-update-my-changes-are-gone",children:[],level:2},{value:"Klipper says the MCU is unable to connect",id:"klipper-says-the-mcu-is-unable-to-connect",children:[],level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",children:[],level:2},{value:"Unparsed config option &#39;config_path: ~/klipper_config&#39; detected in section [server]",id:"unparsed-config-option-config_path-klipper_config-detected-in-section-server",children:[],level:2},{value:"Get help",id:"get-help",children:[],level:2}],u={toc:c};function d(e){var t=e.components,p=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h2",{id:"my-steppers-are-running-backwards"},"My steppers are running backwards!"),(0,a.kt)("p",null,"Refer to the stepper section at the top of printer.cfg, you can add or remove ",(0,a.kt)("inlineCode",{parentName:"p"},"!")," in front of the dir_pin to reverse the direction of that particular stepper."),(0,a.kt)("h2",{id:"everytime-i-update-my-changes-are-gone"},"Everytime i update my changes are gone."),(0,a.kt)("p",null,"You're not supposed to change ",(0,a.kt)("em",{parentName:"p"},"any")," files inside the managed RatOS config/ folder. You should ",(0,a.kt)("em",{parentName:"p"},"only")," change your printer.cfg, if you need to change settings refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/includes-and-overrides"},"Inlcudes & Overrides Documentation")," section.\n",(0,a.kt)("img",{alt:"Hands off the RatOS Managed Config Folder!",src:n(2620).Z,width:"894",height:"590"})),(0,a.kt)("h2",{id:"klipper-says-the-mcu-is-unable-to-connect"},"Klipper says the MCU is unable to connect"),(0,a.kt)("p",null,"Double check your USB connection, try another cable (the one that comes with the board usually works), and check that your firmware was flashed correctly (refer to the guide for your board).\nIf you need to flash new firmware (for example autoflashing will not work if you upgrade klipper before flashing your board and it's properly connected), use the ",(0,a.kt)("inlineCode",{parentName:"p"},"COMPILE_BINARIES")," macro to generate new firmware binaries for all supported boards. Then download the binary for your board from the ",(0,a.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder in the Machine tab, and flash it via SD card."),(0,a.kt)("h2",{id:"i-updated-klipper-and-now-i-get-an-error"},"I updated klipper and now i get an error!"),(0,a.kt)("p",null,"When you update klipper you might see an error that looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Firmware version mismatch between host and guest",src:n(1240).Z,width:"849",height:"260"})),(0,a.kt)("p",null,"This is because klipper made changes to a part of the MCU firmware that we use. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware. For convenience, and ease of use, the newest firmware is compiled and put in the ",(0,a.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder which you can find in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MACHINE")," tab in Mainsail. You can use this to flash your MCU the same way you did initially, via SD Card. RatOS attempts to flash supported boards automatically when klipper is updated. If you're getting this error you're probably using a board which does not support automatic flashing via USB. It's also possible that you updated klipper without having your board flashed and connected. In that case, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"COMPILE_BINARIES")," macro to generate new firmware binaries for all supported boards. Then download the binary for your board from the ",(0,a.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder in the Machine tab, and flash that via SD card."),(0,a.kt)("h2",{id:"unparsed-config-option-config_path-klipper_config-detected-in-section-server"},"Unparsed config option 'config_path: ~/klipper_config' detected in section ","[","server","]"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Unparsed config option",src:n(2767).Z,width:"1000",height:"692"}),"\nThis happens because moonraker has moved ",(0,a.kt)("inlineCode",{parentName:"p"},"config_path")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"log_path")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"[server]")," section to the ",(0,a.kt)("inlineCode",{parentName:"p"},"[file_manager]")," section. You can fix this by moving those to options into the ",(0,a.kt)("inlineCode",{parentName:"p"},"[file_manager]")," (create it if it doesn't already exist) in moonraker.conf."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"[server]\nhost = 0.0.0.0\nport = 7125\nenable_debug_logging = False\nconfig_path = ~/klipper_config\nlog_path = ~/klipper_logs\n")),(0,a.kt)("p",null,"becomes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"[server]\nhost = 0.0.0.0\nport = 7125\nenable_debug_logging = False\n\n[file_manager]\nconfig_path = ~/klipper_config\nlog_path = ~/klipper_logs\n")),(0,a.kt)("p",null,"You may have to ssh into your raspberry pi and edit the file with nano:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh pi@ratos.local\nnano ~/klipper_config/moonraker.conf\n")),(0,a.kt)("p",null,"Use ctrl+o to write your changes to moonraker.conf and then ctrl+x to exit nano. Then run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl restart moonraker\n")),(0,a.kt)("p",null,"And you should be back in action."),(0,a.kt)("h2",{id:"get-help"},"Get help"),(0,a.kt)("p",null,"For further support check out the RatOS-support and klipper channels on Discord. Use the invite link below to join."),(0,a.kt)("a",{href:"https://discord.gg/ratrig",class:"button button--primary"},"Join the Unnofficial RatRig Discord Community"))}d.isMDXComponent=!0},2620:function(e,t,n){t.Z=n.p+"assets/images/config-folder-783bb1478f027bfd6ad4aab7505bc287.png"},1240:function(e,t,n){t.Z=n.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"},2767:function(e,t,n){t.Z=n.p+"assets/images/moonraker_unparsed_config-eb4c0f2b6c16094920135b33fe1192f3.png"}}]);