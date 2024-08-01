function Check() {
    var s = window.document.nhap.str.value;       
    for (var i=0;i<s.length;i++) {
        if ((s[i]>="a" && s[i]<="z") || (s[i]>="0" && s[i]<="9") );
        else 
            s = s.replace(s[i]," ")
    }
    document.nhap.strnew.value = s;
}