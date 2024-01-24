let tog = 1;
let rollingSound = new Audio('/dicerolling.mp3');
let winSound = new Audio('/winharpsichord.mp3');

let p1sum = 0;
let p2sum = 0;

function play(player, psum, correction, num) {
    let sum;
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 36) {
            p1sum = p1sum - num
            
        }
        if (p1sum == 6) {
            p1sum = 18
        }
        if (p1sum == 11) {
            p1sum = 14
        }
        if (p1sum == 15) {
            p1sum = 22
        }
        if (p1sum == 21) {
            p1sum = 28
        }
        if (p1sum == 23) {
            p1sum = 35
        }
        if (p1sum == 16) {
            p1sum = 2
        }
        if (p1sum == 20) {
            p1sum = 5
        }
        if (p1sum == 25) {
            p1sum = 12
        }
        if (p1sum == 31) {
            p1sum = 20
        }
        if (p1sum == 34) {
            p1sum = 22
        }

        sum = p1sum

    }
    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 36) {
            p2sum = p2sum - num
          
        }
        

        if (p2sum == 6) {
            p2sum = 18
        }
        if (p2sum == 11) {
            p2sum = 14
        }
        if (p2sum == 15) {
            p2sum = 22
        }
        if (p2sum == 21) {
            p2sum = 28
        }
        if (p2sum == 23) {
            p2sum = 35
        }
        if (p2sum == 16) {
            p2sum = 2
        }
        if (p2sum == 20) {
            p2sum = 5
        }
        if (p2sum == 25) {
            p2sum = 12
        }
        if (p2sum == 31) {
            p2sum = 20
        }
        if (p2sum == 34) {
            p2sum = 22
        }

        sum = p2sum
    }

    document.getElementById(`${player}`).style.transition = `linear all .5s`;


    if (sum < 6) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 100}px`;
        document.getElementById(`${player}`).style.top = `${-0 * 100 - correction}px`;


    }

    else if (sum == 36) {
        winSound.play();
        if (player == 'p1') {
            alert("Red Won !!");
        }
        else if (player == 'p2') {
            alert("Yellow Won !!");
        }
        location.reload();
    }

    else {

    
        n1 = Math.floor(sum / 6)
        n2 = (sum / 6)
        n3 = ((sum - (n1 * 6)) - 1)
        
        if (n1 % 2 != 0) {

            if (n2 == n1) {
                document.getElementById(`${player}`).style.left = `${(5) * 100}px`
                document.getElementById(`${player}`).style.top = `${((n1 * -1) + 1) * 100 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${((6 - n3) - 1) * 100}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 100 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            
            if (n2 == n1) {

                document.getElementById(`${player}`).style.left = `${(0) * 100}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 100 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n3) * 100}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 100 - correction}px`
            }

        }



    }
}

document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play();
    let num = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    document.getElementById("dice").innerText = num;


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Yellow's Turn : ";
        play('p1', 'p1sum', 0, num);
    } 

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Red's Turn : ";

        play('p2', 'p2sum', 100, num);
    }
    
    tog = tog + 1

});
