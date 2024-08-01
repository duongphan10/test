function Check() {
    var s = window.document.nhap.em.value;
    var str="";
    var i=0;
    while (s[i]!="@") {
        str+=s[i];
        i++;
    }
    document.nhap.id.value = str;
}