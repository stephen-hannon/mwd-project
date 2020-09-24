class SentenceModel {
    constructor (Parse) {
        this.Parse = Parse;
        this.name = 'Sentence';
        this.fields = [
            'text',
            'difficulty',
        ];
        // Hold result(s) of queries
        this.data = {};
        this.collection = [];
    }

    New(obj) {
        if (angular.isUndefined(obj)) {
            // create new Parse Object
            const parseObject = new this.Parse.Object(this.name);
            this.Parse.defineAttributes(parseObject, this.fields);
            return parseObject;
        } else {
            // expose Parse Object attributes (getters and setters)
            this.Parse.defineAttributes(obj, this.fields);
            return obj;
        }
    }

    getById(id) {
        return new this.Parse.Query(this.New())
            // .include('course')
            .get(id)
            .then(result => {
                this.Parse.defineAttributes(result, this.fields);
                // this.Parse.defineAttributes(result.course, this.CourseModel.fields);
                return Promise.resolve(result);
            })
            .catch(error => Promise.reject(error));
    }

    // getByCourse(course) {
    //     return new this.Parse.Query(this.New())
    //         .include('course')
    //         .equalTo('course', course)
    //         .descending('createdAt')
    //         .find()
    //         .then(results => {
    //             results.forEach(result => {
    //                 this.Parse.defineAttributes(result, this.fields);
    //                 this.Parse.defineAttributes(result.course, this.CourseModel.fields);
    //             });
    //             return Promise.resolve(results);
    //         })
    //         .catch(error => Promise.reject(error));
    // }
}
