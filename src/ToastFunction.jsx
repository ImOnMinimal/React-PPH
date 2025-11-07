import "./toast.css"

const ToastFunction = function ToastFunction() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
    
export default ToastFunction;