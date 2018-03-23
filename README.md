## Simple and beautiful toastr.

### Usage

		import toastr from 'smallorange-toastr';
		import 'smallorange-toastr/style.css';

		toastr(text: string, time: number, footerText: string);
		toastr.info(text: string, time: number, footerText: string);
		toastr.error(text: string, time: number, footerText: string);
		toastr.warning(text: string, time: number, footerText: string);
		toastr.success(text: string, time: number, footerText: string);

		window.toastr(text: string, time: number, footerText: string);
		window.toastr.info(text: string, time: number, footerText: string);
		window.toastr.error(text: string, time: number, footerText: string);
		window.toastr.warning(text: string, time: number, footerText: string);
		window.toastr.success(text: string, time: number, footerText: string);

