function assertEquals(expect, actual) {

    // Handle: strings, numbers, simple arrays

    // Run tests using "npx jest"

    if (expect === actual) {
        // If expected and actual are strictly equal, don't throw an error (i.e. return undefined)
        return;
    } else {

        // If expected and actual aren't strictly equal, first check if they have the same type:
        if (typeof expect !== typeof actual) {

            // If not, throw a "different type" error:
            throw new Error(`Expected type ${typeof expect} but found type ${typeof actual}`);

        } else {

            // Types are the same, so throw different errors depending on the mismatch:

            switch (typeof expect) {

                case 'string':
                    throw new Error(`Expected "${expect}" but found "${actual}"`);

                case 'number':
                    throw new Error(`Expected ${expect} but found ${actual}`);

                case 'object':
                    // Handle flat arrays:
                    if (expect.length !== actual.length) {
                        throw new Error(`Expected array length ${expect.length} but found ${actual.length}`);
                    } else {
                        expect.forEach((element, index) => {
                            if (actual[index] !== element) {
                                throw new Error(`Expected "${element}" but found "${actual[index]}"`);
                            }
                        });
                    }
                    return;

                default:
                    throw new Error();

            }

        }

    }

}

module.exports = assertEquals
