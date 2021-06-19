
        var main = document.getElementById('main');
        var bg = document.querySelector('.bg');
        var image = document.querySelector('.image');
        var select = document.querySelector('.select');
        var dian = document.getElementsByClassName('dian');
        var left = document.querySelector('.left');
        var right = document.querySelector('.right');

        var picture = ['img/an.1.jpg', 'img/an.2.jpg', 'img/an.3.jpg', 'img/an.4.jpg', 'img/an.5.jpg', 'img/an.6.jpg'];

        var index = 0;

        for (let i = 0; i < picture.length; i++) {
            let dot = document.createElement('div');
            dot.classList.add('dian');
            select.appendChild(dot);
            dot.bianhao = i;
        }


        function qingchu() {
            for (let i = 0; i < dian.length; i++) {
                dian[i].classList.remove('check');

            }
        }



        function yunxing() {
               /* index加1 */
            index = index + 1;
            if (index == picture.length) {
                index = 0;
            }
            image.src = picture[index];
            bg.style.cssText = ` background-image: url(${picture[index]});`
            qingchu();
            dian[index].classList.add('check');

            if (index == picture.length - 1) {
                index = -1;
            }

        }




        right.addEventListener('click', function () {
            yunxing();
        })


        left.addEventListener('click', function () {

            index = index - 1;
            if (index == -1) {
                index = picture.length - 1;
            }
            image.src = picture[index];
            bg.style.cssText = ` background-image: url(${picture[index]});`

            qingchu();
            dian[index].classList.add('check');

        })



        main.addEventListener('mouseover', function () {

            clearInterval(lunbo);

            image.classList.remove('yun');

        })


        main.addEventListener('mouseout', function () {

            lunbo = setInterval(yunxing, 3000);

            image.classList.add('yun');
            image.style.animationDelay = '3s';
        })


        for (let i = 0; i < picture.length; i++) {
            dian[i].addEventListener('click', function () {
                qingchu();
                this.classList.add('check');
                index = i;
                image.src = picture[index];
            bg.style.cssText = ` background-image: url(${picture[index]});`

            })
        }


        lunbo = setInterval(yunxing, 3000);
        image.classList.add('yun');
        dian[0].classList.add('check');

    