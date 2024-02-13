
            let arr = [];
            for (let i = 0; i < 10; i++) {
                arr.push(Math.round(Math.random() * 100));
            }

            function avg(array) {
                let sum = 0;
                for (const elem of arr) {
                    sum += elem;
                }
                document.write(`${arr} átlaga: ${sum / arr.length}`);
            }

            function min(array) {
                let min = tomb[0];
                for (const elem of array) {
                    if (elem < min) {
                        min = elem;
                    }
                }
                return min;
            }

            function max(array) {
                let max = array[0];
                for (const elem of array) {
                    if (elem < min) {
                        max = elem;
                    }
                }
                return max;
            }

            function count(array) {
                let count = 0;
                for (const elem of array) {
                    if (elem % 2 === 0) {
                        count++;
                    }
                }
                return count;
            }

            function getEven(array) {
                let result = [];
                for (const elem of array) {
                    if (elem % 2 === 0) {
                        result.push(elem);
                    }
                }
                return result;
            }

            document.write(arr, "<br>Páros: ", getEven(arr))