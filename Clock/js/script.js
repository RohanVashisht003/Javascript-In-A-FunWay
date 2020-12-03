const secondHand=document.querySelector('.second-hand');
        const minHand=document.querySelector('.minute-hand');
        const hourHand=document.querySelector('.hour-hand');

        function setDate(){
            const now = new Date();

            const seconds = now.getSeconds();
            const secondDegrees=((seconds/60)*360)+90;
            secondHand.style.transform = `rotate(${secondDegrees}deg)`;
            console.log(seconds);

            const mins = now.getMinutes();
            const minuteDegree = ((mins/60)*360)+90;
            minHand.style.transform = `rotate(${minuteDegree}deg)`;
            console.log(mins);

            const hours = now.getHours();
            const hourDegree = ((hours/12)*360)+90;
            hourHand.style.transform = `rotate(${hourDegree}deg)`;
        }

        setInterval(setDate,900);