class PatientList{
    constructor(size = 1000){
        this.size = size;           // 1 operation
        this.patientList = new Array(size);   // creating an array and assign 2 operation    // constructor having O(1) time complexity
    }
    #hash(key, size = this.size) {
		let hash = 5381;
		for (let ch of key) {
			hash = (hash * 33) ^ ch.charCodeAt(0);      // function is from workshop resource
		}
		return Math.abs(hash) % size;
	}
    addPatient(patientId, patientName){
        if(this.has(patientId)){
            console.log("Patient already exist with this Patient ID:", patientId, patientName);
            return;
        } ;
        const index = this.#hash(patientId);      // 2 operation. generate hash and assign
        this.patientList[index] = patientName;   //  assign the value. 1 operation
    }
    getPatient(patientId){
        const index = this.#hash(patientId);      // 2 operation. generate hash and assign
        return this.patientList[index];           // 1 operation. accessing the value with index
    }
    has(patientId){
        return !!this.getPatient(patientId);
    }
}

const patientList = new PatientList();
patientList.addPatient("1234567890", "John Doe");
patientList.addPatient("0987654321", "Jane Smith");
patientList.addPatient("1122334455", "Alice Johnson");
patientList.addPatient("5566778899", "Bob Brown");
patientList.addPatient("9988776655", "Eve Davis");
patientList.addPatient("4433221110", "Charlie Wilson");
patientList.addPatient("7788991011", "David Thompson");
patientList.addPatient("2211003988", "Grace Martinez");
patientList.addPatient("6655443322", "Frank Garcia");
patientList.addPatient("3322110099", "Helen Lee");
patientList.addPatient("8899001122", "Ivan Hernandez");
patientList.addPatient("1100998877", "Judy Kim");
patientList.addPatient("4433221100", "Kevin Nguyen");
patientList.addPatient("2211009988", "Michael Davis");
patientList.addPatient("5566778899", "Bob Brown");

console.log(patientList.getPatient("1234567890"));
console.log(patientList.getPatient("2211009988"));
console.log(patientList.getPatient("4433221100"));
