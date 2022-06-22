import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray, FormGroupName } from '@angular/forms';

@Component({
	selector: 'app-reactiveform',
	templateUrl: './reactiveform.component.html',
	styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

	form: FormGroup | any;
	Inputs: any = [];
	Outputs: any = [];
	tableSource:Array<any> = [];
	// itemRows: FormArray | any;
	ModeList: Array < "Server"> = [
		"Server"

	];

	RuleStatusList: Array<"ACTIVE"|"INACTIVE"> = [
		"ACTIVE",
		"INACTIVE"
	];

	RuleTypeList: Array<"HMI"> = [
		"HMI"
	];

	InputOpList : Array< "AND" | "OR"> = [
		"AND",
		"OR",

	];

	networkfieldList:Array<"network_1"|"network_2"> = [
		"network_1",
		"network_2"
	];

	NodefieldList :Array<"node_06"|"node_05"> = [
		"node_06",
		"node_05"
	];

	metricfieldList :Array<"metric_03"|"metric_04"> = [
		"metric_03",
		"metric_04"
	];

	apiFieldList:Array<"lastFld"|"status"> = [
		"lastFld",
		"status"
	];

	ConditionList: Array<"GT"|"LT"|"GTE"|"LTE"|"EQ">= [
		"GT",
		"LT",
		"GTE",
		"LTE",
		"EQ"
	];

	

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.form = this.fb.group({
			
			itemRows: this.fb.array([
				this.initItemRows()
			]),
			
		});
	}

	get itemRows(): FormArray {
		return this.form.get('itemRows') as FormArray;
	}

	initItemRows(): FormGroup {
		return this.fb.group({
			// list all your form controls here, which belongs to your form array
			RuleId: this.fb.control('', Validators.required),
			NetworkId: this.fb.control('', Validators.required),
			OrgId: this.fb.control('', Validators.required),
			RuleName: this.fb.control('', Validators.required),
			RuleGroupId: this.fb.control('', Validators.required),
			RuleDescription: this.fb.control('', Validators.required),
			Mode: this.fb.control('', Validators.required),
			RuleStatus: this.fb.control('', Validators.required),
			Tenant: this.fb.control('', Validators.required),
			Solution: this.fb.control('', Validators.required),
			RuleType: this.fb.control('', Validators.required),
			Recurrence: this.fb.control('', Validators.required),
			InputOp: this.fb.control('', Validators.required),
			Inputs: this.fb.array([
				this.initItemInputs()
			]),
			Outputs: this.fb.array([
				this.initItemOutputs()

			])
		});
	}

	initItemInputs(): FormGroup {
		return this.fb.group({
			BlockStatus: this.fb.control("", Validators.required),
			Id: this.fb.control("", Validators.required),
			Type: this.fb.control("", Validators.required),
			networkfield: this.fb.control("", Validators.required),
			Nodefield: this.fb.control("", Validators.required),
			metricfield: this.fb.control("", Validators.required),
			apiField: this.fb.control("", Validators.required),
			Condition: this.fb.control("", Validators.required),
			value: this.fb.control("", Validators.required),
			Description: this.fb.control("", Validators.required)
		});
	}

	initItemOutputs(): FormGroup {
		return this.fb.group({
			BlockStatus: this.fb.control("", Validators.required),
			Id: this.fb.control("", Validators.required),
			Type: this.fb.control("", Validators.required),
			networkfield: this.fb.control("", Validators.required),
			Nodefield: this.fb.control("", Validators.required),
			metricfield: this.fb.control("", Validators.required),
			apiField: this.fb.control("", Validators.required),
			Condition: this.fb.control("", Validators.required),
			value: this.fb.control("", Validators.required),
			Description: this.fb.control("", Validators.required)
		});
	}


	onSubmit() {
				
				// this.tableSource.push(this.itemRows.value)
	          	// console.log(this.tableSource);
				console.log(this.form.errors);
				console.log(this.form.valid);
				console.log(this.form.value);
	};

	changeRuleStatus(e: any) {
		console.log(e.target);
	}

	changeInputOp(e: any) {
		console.log(e.target);
	}

	changenetworkfield(e: any) {

		console.log(e.target);
	}

	changeNodefield(e: any) {

		console.log(e.target);
	}
	changemetricfield(e: any) {
		console.log(e.target);
	}

	changeCondition(e: any) {

		console.log(e.target);

	}

	addform(itemRows:FormArray) {

		itemRows.push(this.initItemRows());
		console.log(this.initItemRows().errors)
	}

	deleteform(index: number) {
		this.itemRows.removeAt(index);

	}

	addInputs(Inputs: FormArray) {
		Inputs.push(this.initItemInputs());
	}

	deleteInputs(Inputs: FormArray, index: number) {
		Inputs.removeAt(index);
	}

	addOutputs(Outputs: FormArray) {
		Outputs.push(this.initItemOutputs())

	}

	deleteOutputs(Outputs: FormArray, index: number) {

		Outputs.removeAt(index);
	}
}
