(function(){
    var preloaded = window.__PRELOADED__
    if (preloaded == null) {
        return
    }
    var global = preloaded.global
    if (global == null) {
        return
    }
    var btnRegister = $("#btn-subscribe");
    if (btnRegister == null) {
        return
    }
    $("#btn-subscribe").click(function(e) {
        if(e) {
            e.preventDefault()
        }
        var visitor = {
            firstName: 'Newsletter Blog',
            lastName: '',
            email: $('#user-email').val().trim()
        }

        if(visitor.email.length == 0){
            alert("Enter email")
            return
        }

        $.ajax({
            url: "/api/subscriber",
            type: 'POST',
            data: visitor,
            success: function(response){
                if(response.confirmation != 'success') {
                    alert("Error: "+ response.message)
                    return
                }
                alert(global.subscriber_confirmation)
            },
            error: function(response){
                console.log("Error-" + JSON.stringify(response))
            }
        })
    })
})()