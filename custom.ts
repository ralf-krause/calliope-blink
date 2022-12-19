/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
 */

/**
 * Animation blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace animations {
    /**
     * Blink an led at a particular interval
     * @param x horizontal led coordinate 0..4
     * @param y vertical led coordinate 0..4
     * @param interval time in milliseconds between blinks
     */
    //% block="blink led x $x y $y every $interval ms"
    export function blink(x: number, y: number, interval: number): void {
        let sprite = game.createSprite(x, y)
        sprite.setBlink(interval)
        sprite.blink()
    }
    
}
