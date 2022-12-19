/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
 */

/**
 * Animation blocks
 */
//% weight=60 color=#CD853F icon="\uf140"
namespace animations {
    let sprites: game.LedSprite[] = []

    /**
     * Blink an led at a particular interval
     * @param x horizontal led coordinate 0..4
     * @param y vertical led coordinate 0..4
     * @param interval time in milliseconds between blinks
     */
    //% block="blink led x $x y $y every $interval ms"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1
    //% interval.shadow=timePicker
    export function blink(x: number, y: number, interval: number): void {
        // find an exiting strite
        let sprite = sprites.find(s => s.x() == x && s.y() == y)
        if(!sprite) 
            sprite = game.createSprite(x, y)
        sprite.setBlink(interval)
        sprite.blink()
    }
    
}
