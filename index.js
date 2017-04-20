/**
 * @description an inheritable singleton class
 * @author      Tommy
 * @date        2017-4-20
 */
class SingleTon {
	constructor() {
		// init
		if(SingleTon.instance instanceof SingleTon) {
			SingleTon.created = true;
		} else {
			SingleTon.instance = this;
			SingleTon.created = false;
		}

		return SingleTon.instance;
	}


	/**
	 * reset the singleton
	 */
	ClearInstance() {
		SingleTon.instance = null;
	}


	/**
	 * tell if instance created
	 * @return {boolean} `true` stands for created
	 */
	created() {
		return SingleTon.created;
	}
}

SingleTon.created = false;

module.exports = SingleTon;