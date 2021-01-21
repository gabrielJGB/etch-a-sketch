
        const $increaseButton = document.querySelector('.increase-button');
        const $decreaseButton = document.querySelector('.decrease-button');
        const $clearButton = document.querySelector('.clear-button');
        const $grid = document.querySelector('.grid');
        const $sliderR = document.querySelector('.slider-R');
        const $sliderG = document.querySelector('.slider-G');
        const $sliderB = document.querySelector('.slider-B');
        let gridSize = 16;
        let tiles = gridSize * gridSize;
        let maxR = 0;
        let maxG = 0;
        let maxB = 0;

        createGrid(gridSize);

        $increaseButton.addEventListener('click', increaseGridSize);
        $decreaseButton.addEventListener('click', decreaseGridSize);
        $clearButton.addEventListener('click', clearGrid);

        

        $sliderR.oninput = function () {
            maxR = this.value;
        }

        $sliderG.oninput = function () {
            maxG = this.value;
        }

        $sliderB.oninput = function () {
            maxB = this.value;
        }

        function clearGrid() {

            for (let item of $grid.children) {
                item.style['background-color'] = "#ffffff"
            }
        }

        function increaseGridSize() {
            gridSize = gridSize + 5;
            $grid.textContent = "";
            createGrid(gridSize);
        }

        function decreaseGridSize() {
            gridSize = gridSize - 2;
            $grid.textContent = "";
            createGrid(gridSize);
        }

        function createGrid(gridSize) {

            tiles = gridSize * gridSize;

            $grid.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
            $grid.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;

            for (let i = 0; i < tiles; i++) {
                let tile = document.createElement('DIV');
                tile.className = "box";
                tile.addEventListener('mouseover', changeBackground);
                $grid.appendChild(tile);
            }
        }

        function changeBackground(box) {

            i = Math.floor(Math.random() * maxR);
            j = Math.floor(Math.random() * maxG);
            k = Math.floor(Math.random() * maxB);
            box.target.style['background-color'] = `rgb(${i},${j},${k})`;
        }
