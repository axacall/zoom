let fotos = document.querySelector(".fotos");
let bigFotos = document.getElementsByClassName("bigFotos");
let contain = document.getElementsByClassName("contain");
let kapat = document.querySelector(".kapat");
let durum = 1;
kapat.style.display = "none";
fotos.addEventListener("click", function () {

    if (durum == 1) {
        fotos.classList.add("fotos");
        fotos.style = {
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        }
        kapat.style.display = "none";
        durum = 0;


    } else {
        fotos.classList.remove("bigFotos");
        fotos.style = {
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        }
        kapat.style.display = "block"
    }

})

kapat.addEventListener("click", function () {
    durum = 1;
})
var element = document.querySelector(".fotos");
var f = function () {

    function Draggable(element, dragStart, dragDrop) {
        this.element = element;
        this.dragStart = dragStart;
        this.dragDrop = dragDrop;
        var self = this;
        if (durum == 1) {
            this.element.classList.remove('bigFotos');// resmi buyuen class
            kapat.style.display = "none";//buyuk resmi kapatır
        } else {
            this.element.classList.add('bigFotos');// Resmş buyutur..
        }
        var move = function (event) {
            if (self.dragStart !== undefined) { self.dragStart(); }
            //don't bubble this event - mousedown
            event.stopPropagation();
            //prevent any default action
            event.preventDefault();

            var originalLeft = parseInt(window.getComputedStyle(this).left);
            var originalTop = parseInt(window.getComputedStyle(this).top);
            var mouseDownX = event.clientX;
            var mouseDownY = event.clientY;

            function dragMe(event) {
                self.element.style.left = originalLeft + event.clientX - mouseDownX + "px";
                self.element.style.top = originalTop + event.clientY - mouseDownY + "px";


                event.stopPropagation();
            }

            function dropMe(event) {
                document.removeEventListener('mousemove', dragMe, true);
                document.removeEventListener('mouseup', dropMe, true);
                if (self.dragDrop !== undefined) { self.dragDrop(); }

                event.stopPropagation();
            }

            document.addEventListener('mouseup', dropMe, true);
            document.addEventListener('mousemove', dragMe, true);

        };

        this.element.addEventListener('mousedown', move, false);

    }
    var imageElement1 = document.querySelector('.fotos');
    var dragObject1 = new Draggable(imageElement1);
};

window.addEventListener('click', f, false);