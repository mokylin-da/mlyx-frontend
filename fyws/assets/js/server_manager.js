var namespace=function(){for(var e=arguments,r=0;r<e.length;r++)for(var n=e[r].split("."),a=window,g=0;g<n.length;g++)a[n[g]]=a[n[g]]||{},a=a[n[g]];return a};namespace("ServerManager"),ServerManager.g_server=ServerUrl||"",ServerManager.openserverlist=function(e,r,n){var a=ServerManager.g_server+"/gameinfo/server/openserverlist?function=?";$.getJSON(a,{gid:e.gid},function(e){1==e.status?r(e):n(e)})},ServerManager.getServerList=function(e,r,n){var a=ServerManager.g_server+"/gameinfo/server/pageopenserverlist?function=?";$.getJSON(a,{gid:e.gid,pagenum:e.pagenum||1,pagesize:e.pagesize||10},function(e){1==e.status?r(e):n(e)})},ServerManager.recentserver=function(e,r,n){var a=ServerManager.g_server+"/gameinfo/server/recentserver?function=?";$.getJSON(a,{gid:e.gid,pagenum:e.pagenum||1,pagesize:e.pagesize||40},function(e){1==e.status?r(e):n(e)})},ServerManager.fillHttpUrl=function(e){var r=e.indexOf("http");return-1==r&&(e="http://"+e),e},ServerManager.getAllServerList=function(e,r,n){var a=ServerManager.g_server+"/gameinfo/server/pageopenserverlist?function=?";$.getJSON(a,{gid:e.gid,pagenum:e.pagenum||1,pagesize:e.pagesize||40},function(e){1==e.status?r(e):n(e)})};