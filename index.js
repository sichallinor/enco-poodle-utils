'use strict';


//var log = require('simple-node-logger').createSimpleLogger();
import SimpleLogger from 'simple-node-logger';
var log = SimpleLogger.createSimpleLogger();

//var moment = require('moment');
import moment from 'moment';

//var uuid = require('uuid');
import uuid from 'uuid';


//module.exports =  {
export default {



	format_datetime_standard : "YYYY[-]MM[-]DD[T]HH:mm:ss",
	format_datetime_ical : "YYYYMMDD[T]HHmmss",
    format_datetime_jsdate : 'YYYY-MM-DD HH:mm:ss',
    format_datetime_simpledate : 'YYYY-MM-DD',
    format_datetime_simpletime : 'HH:mm',
    format_datetime_full : 'dddd, MMMM Do YYYY',


	getLog(){
		//return null;
		return log;
	},

	// ------------------------------------------

	getDateTimeNowAsString(outputFormat){
		return moment().format(outputFormat);
	},

	getStartOfDayWithDeltaAsString(delta_val,delta_unit,outputFormat){
		return moment().startOf('day').add(delta_val, delta_unit).format(outputFormat );
	},
	getEndOfDayWithDeltaAsString(delta_val,delta_unit,outputFormat){
		return moment().endOf('day').add(delta_val, delta_unit).format(outputFormat );
	},

	getStartOfWeekAsString(outputFormat){
		return moment().startOf('week').format(outputFormat );
	},
	getEndOfWeekAsString(outputFormat){
		return moment().endOf('week').format(outputFormat );
	},

	getStartOfMonthAsString(outputFormat){
		return moment().startOf('month').format(outputFormat );
	},
	getEndOfMonthAsString(outputFormat){
		return moment().endOf('month').format(outputFormat );
	},


	getDateTimeNowWithDeltaAsString(delta_val,delta_unit,outputFormat){
		return moment().add(delta_val, delta_unit).format(outputFormat );
	},

	getMomentWithDeltaAsString(moment,delta_val,delta_unit,outputFormat){
		return moment.add(delta_val, delta_unit).format(outputFormat );
	},


	confirmFormat(inputDateString,inputFormat){
		return ( typeof inputDateString === "string" && inputFormat.test( inputDateString ) );
	},

    formatDate(inputDateString,inputFormat,outputFormat){
    	if(inputDateString) return moment( inputDateString, inputFormat ).format(outputFormat);
    	return null;
    },


    formatDateAsJSDate(inputDateString,inputFormat){
    	return new Date( this.formatDate(inputDateString,inputFormat, this.format_datetime_jsdate ) );
    },
    formatDateAsMoment(inputDateString,inputFormat){
    	if(inputDateString) return moment( inputDateString, inputFormat );
    	return null;
    },

	/**
	 * generates a UID for an event
	 *
	 * @returns {String}
	 */
	generateUID() {
		return uuid()
	},


	stripBackslashes(str){
		return str.replace(/\\/g, '');
	}

}