'use strict';

function getProjectFileUrl (nomeFile) {
	return this.c3runtime.getProjectFileUrl(nomeFile);
}

function getAllGlobalVars () {
	const ev = this.c3runtime.all_global_vars; 
	return ev;
}

function getGlobalVarsByName (nameVar) {
	const objArray = this.getAllGlobalVars();
	const obj = objArray.find(function (obj) { return obj.name === nameVar; });
	return obj.data;
}