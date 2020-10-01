class UserScoreModel {
    constructor (Parse, SentenceModel) {
        this.Parse = Parse;
        this.SentenceModel = SentenceModel;
        this.name = 'UserScore';
        this.fields = [
            'userName',
            'sentence',
            'speed',
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

    getBest(count) {
        return new this.Parse.Query(this.New())
            .include('sentence')
            .ascending('speed')
            .limit(count)
            .find()
            .then(results => {
                results.forEach(result => {
                    this.Parse.defineAttributes(result, this.fields);
                    this.Parse.defineAttributes(result.sentence, this.SentenceModel.fields);
                });
                return Promise.resolve(results);
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

angular
    .module('common')
    .service('UserScoreModel', UserScoreModel);

