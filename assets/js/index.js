
$form = document.getElementById('form');
$signatureLayout = document.getElementById('signatureLayout');

$form.addEventListener('submit', (event) => {
	event.preventDefault();
	const data = new FormData($form);

	const name=data.get('name');
	const workPosition=data.get('work-position').toUpperCase();
	const phone=data.get('phone');
	const mail=data.get('mail');
	renderSignatureContainer(name,workPosition,phone,mail);
})

function signatureTemplate(name,workPosition,phone,mail){
	return (
		`		<div class="signature-container">
					<div class="company-logo">
						<img src="./assets/images/logo-gts.jpg">
					</div>
					<div class="data">
						<span class="data-name">${name}</span>
						<span class="data-work-position">${workPosition}</span>
						<div class="data-contact">
							<i class="fa fa-phone icon"></i>
							<span>${phone}</span>
						</div>
						<div class="data-contact">
							<i class="fa fa-envelope icon"></i>
							<span>${mail}</span>
						</div>
						<div class="data-contact">
							<i class="fa fa-map-marker icon"></i>
							<span>Av. Guzman Blanco 240 Int. 403 - Cercado de Lima</span>
						</div>
						<div class="data-contact">
							<i class="fa fa-globe icon"></i>
							<span>www.grupot-soluciona.com</span>
						</div>
					</div>
					<div class="services">
						<div class="service-detail">
							<i class="icon fa fa-child"></i>
							<h5>Selección de Personal</h5>	
						</div>
						<div class="service-detail">
							<i class="icon fa fa-book"></i>
							<h5>Payroll</h5>
						</div>
						<div class="service-detail">
							<i class="icon fa fa-globe"></i>
							<h5>Outsourcing</h5>
						</div>
						<div class="service-detail">
							<i class="icon fa fa-user-secret"></i>
							<h5>Verificación de Datos</h5>
						</div>
					</div>
				</div>`
	)
}

function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
}
function setAttributes($element, attributes){
    for(const attribute in attributes){
      $element.setAttribute(attribute, attributes[attribute]);
    }
}
function addLoader(){
	const $loader = document.createElement('img');
    setAttributes($loader, {
      src: 'assets/images/loader.gif',
    })
    $signatureLayout.append($loader);
}
function renderSignatureContainer(name,workPosition,phone,mail){
	if($signatureLayout.children[0])
		$signatureLayout.children[0].remove();
	addLoader();
	setTimeout(() =>{
		$signatureLayout.children[0].remove();
		const HTMLString=signatureTemplate(name,workPosition,phone,mail);
		const signatureElement = createTemplate(HTMLString);
	  	$signatureLayout.append(signatureElement);	
        signatureElement.classList.add("fadeIn"); 
	},1000)
	
}
