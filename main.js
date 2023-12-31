import { setHTMLElement, encodeBASE64/* , decodeBASE64 */} from "./src/index";

function notifier(property, oldValue, newValue) {
    //   DEV_TIP # refer to README.md for possible Base64 pitfalls in JavaScript
    //   DEV_NOTE # you would need to use decodeBASE64 somewhere inside switch depending on your case;
    /* //      - if, for an example, decoding value is an array then consider the following function that casts attribute Base64 value back to Array e.g.
        function castToArray(decoding_value){
            if (decodeBASE64(decoding_value).search(Array.name) === 0){
                decodeBASE64(decoding_value).split(",").splice(1).map((v)=>v = parseInt(v))
            }
        }
        castToArray("QXJyYXksOCwxNiwzMiw2NA==") // # [8, 16, 32, 64]
    */
    switch (property) {
        /* DEV_NOTE # each case value is what you registered at setHTMLElement "observings" property */
        case 'version':
            if (setHTMLElement.hasChanged(oldValue, newValue)){
                console.log(`${property} has changed from ${oldValue} to ${newValue}`)
                // DEV_NOTE # instead of console.log you could write your own custom event dispatcher...
            }
            break;
        case 'encodings':
            if (setHTMLElement.hasChanged(oldValue, newValue)){
                console.log(`${property} has changed from ${oldValue} to ${newValue}`)
                // DEV_NOTE # instead of console.log you could write your own custom event dispatcher...
            }
            break;
        default:;
    }
}

document.body.appendChild(
    globalThis.wc_matrix = setHTMLElement('captain-hook', {
        _constructor: {
            body: function(origin, citizenship){
                this.origin = origin;
                this.citizenship = citizenship;
            },
            props: [1, "alpha"]
        },
        observings: new Map([
            ['version', 1],
            /* TIP: explicitly give type of 'Array' to be user-friendlier whilst decoding (see – 'notifier' function declaration above for decodeBASE64) */
            ['encodings', encodeBASE64([Array.name, 8, 16, 32, 64])],
        ]),
        lifecycles: {
            isObserved: notifier,
            /* DEV_NOTE # isMounted console.logs on the very first load of component */
            isMounted: ()=> console.log("isMounted"),
            /* DEV_NOTE # Remove from DevTools to observe the following console.log message */
            isDestroyed: ()=> console.log("isDestroyed")
        }
    })
)

///*  === EXAMPLES # HOW TO USE GETTER/SETTER PAIRS FOR EACH OF ATTRIBUTES OBSERVED === */
/* globalThis.wc_matrix.version */// # GETTER EXAMPLE
/* globalThis.wc_matrix.version = Math.random() */// SETTER EXAMPLE
/* globalThis.wc_matrix.encodings */// # GETTER EXAMPLE
/* globalThis.wc_matrix.encodings = [] */// SETTER EXAMPLE

///* IF _CONSTRUCTOR WAS USED */
/* globalThis.wc_matrix.origin */
/* globalThis.wc_matrix.citizenship */