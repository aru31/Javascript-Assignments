// Cookie functions

// Some code based on the article by James Wondrasek, "The way cookie crumbles",

// Internet.au magazine



function SetCookie (name,value,expires,path,domain,secure) 

{

  document.cookie = name + "=" + escape (value) +

    ((expires) ? "; expires=" + expires.toGMTString() : "") +

    ((path) ? "; path=" + path : "") +

    ((domain) ? "; domain=" + domain : "") +

    ((secure) ? "; secure" : "");

}



function DeleteCookie (name,path,domain) 

{

  if (GetCookie(name)) {

    document.cookie = name + "=" +

      ((path) ? "; path=" + path : "") +

      ((domain) ? "; domain=" + domain : "") +

      "; expires=Thu, 01-Jan-70 00:00:01 GMT";

  }

}



function GetCookie (name) 

{

  var arg = name + "=";

  var alen = arg.length;

  var clen = document.cookie.length;

  var i = 0;

  while (i < clen) {

    var j = i + alen;

    if (document.cookie.substring(i, j) == arg)

      return getCookieVal (j);

	i = document.cookie.indexOf(" ", i) + 1;

    if (i == 0) break; 

  }

  return null;

}



function getCookieVal (offset)

{

	var str = document.cookie.indexOf(";", offset);

	if(str==-1) str = document.cookie.length;

	return unescape(document.cookie.substring(offset, str));

}


