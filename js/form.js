class Form {
    constructor() {

    }

    display() {
        var title = createElement('h2');
        title.html("CAR RACING GAME")
        title.position(130, 0);

        var input = createInput("name");
        input.position(130, 100)

        var button = createButton("PLAY");
        button.position(250, 200)

        var greeting = createElement('h3');

        button.mousePressed(function () {
            input.hide();
            button.hide();

            var name = input.value();

            playerCount += 1;

            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello" + name);
            greeting.position(130, 100)

        })
    }
}