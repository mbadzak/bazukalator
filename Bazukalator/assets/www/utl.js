String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};
String.prototype.trim_newline = function() {
	return this.replace(/(\r\n|\n|\r)/gm,"");
};

/*
 * utl_clear_text_field
 * IN	field	field to clear
 */
function utl_clear_text_field(field, init_value) {
	if (field.value.toString() == init_value.toString())
		field.value = "";
	field.style.color = "#000000";
	field.style.background = "#FFFFFF";
}

function utl_clear_text_field_id(id, init_value)
{
	var field = document.getElementById(id);
	return utl_clear_text_field(field, init_value);
}

function utl_clear_password_field(disp_p, real_p) {
	var dp = document.getElementById(disp_p);
	var rp = document.getElementById(real_p);
	dp.style.display = "none";
	rp.style.display = "inline";
	
	rp.focus();
}

function utl_reset_password_field(disp_p, real_p) {
	var dp = document.getElementById(disp_p);
	var rp = document.getElementById(real_p);
	if (rp.value == "") {
		dp.style.display = "inline";
		rp.style.display = "none";
		dp.value = "Password";
	}
} 

function utl_reset_text_field(field, value) {
	if (field.value == "") {
		field.value = value;
		field.style.color = "#999999";
	}
} 

function utl_focus(id)
{
	var elem = document.getElementById(id);
	elem.focus();
}

function utl_is_int(a)
{
	return parseInt(a, 10) === a;
}
function utl_handle_enter(field, event)
{
	if (event.keyCode == 13) {
		$(field).closest('form').submit();
		return false;
	}
	return true;
}

/**
 * @deprecated use jquery plugin instead
 * @param field
 * @param event
 * @param max_per_line
 */
function utl_expand_texarea_as_you_go(field, event, max_per_line)
{
	var chars = field.value.length;
	var rows = chars / max_per_line;
	var newline_count;
	var total_size = 18;
	var modified = false;
	
	if (chars == 0) return;
	
	newline_count = (field.value.split('\n')).length - 1;

	if (utl_is_int(rows))
	{
		total_size += (rows * 12);
		modified = true;
	}
	
	if (newline_count > 0) {
		total_size += (newline_count * 16);
		modified = true;
	}
	
	if (modified)
		field.style.height = total_size + "px";
}

/*
 * utl_toggle_visibility
 * IN	field	field to clear
 */
function utl_toggle_visibility(field) {
	var fl = document.getElementById(field);
	fl.style.display = (fl.style.display == "block") ? "none" : "block";
}

/*
 * utl_toggle_visibility
 * IN	field	field to show
 */
function utl_show_field(field) {
	var fl = document.getElementById(field);
	if (fl == null)
		return;
	fl.style.display = "block";
}

function utl_hide_field(field) {
	var fl = document.getElementById(field);
	if (fl == null)
		return;
	fl.style.display = "none";
}

function utl_show_obj(obj)
{
	obj.style.display = "block";
}
function utl_hide_obj(obj)
{
	obj.style.display = "none";
}


function generate_uuid()
{
	/* credit: http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript */
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	    return v.toString(16);
	});	

	return uuid;
}
