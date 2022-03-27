function assertEquals(expect, actual) {

    // Handle: strings, numbers, simple arrays

    // Run tests using "npx jest"

    if (expect === actual) {
        return;
    } else {

        switch (typeof expect) {

            case 'string':
                throw new Error(`Expected "${expect}" but found "${actual}"`);
                break;

        }

    }

}

module.exports = assertEquals
