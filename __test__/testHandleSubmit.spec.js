import { getDate, getPixabay } from "../src/client/js/api";
import { handleSubmit } from "../src/client/js/formHandler";
test('should return Jeddah', () => {
    beforeEach(() => {
        document.body.innerHTML ='<input id="name" type="text" name="input" value="" placeholder="">'+'Jeddah'+'</input>'
    });
    afterEach(() => {
        const city = handleSubmit();
        expect(city).not.toBeUndefined();
    });
});


