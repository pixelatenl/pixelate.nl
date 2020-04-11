<template>
    <div class="logo">
        <div class="logo__circle logo__circle--1"></div>
        <div class="logo__circle logo__circle--2"></div>
        <div class="logo__circle logo__circle--3"></div>
        <div class="logo__circle logo__circle--4"></div>
        <div class="logo__circle logo__circle--5"></div>
        <div class="logo__circle logo__circle--6"></div>
    </div>
</template>
<style lang="css" scoped>
.logo {
	--logo--circle1--color: var(--global--color--primary);
	--logo--circle2--color: rgba(var(--logo--circle1--color), 0.8);
	--logo--circle3--color: rgba(var(--logo--circle1--color), 0.6);
	--logo--circle4--color: rgba(var(--logo--circle1--color), 0.4);
	--logo--circle5--color: rgba(var(--logo--circle1--color), 0.3);
	--logo--circle6--color: var(--logo--circle5--color);
	position: relative;
	display: inline-block;
	width: 320px;
	min-height: 320px;
	vertical-align: top;
}
@media only screen and (max-width: 768px) {
	.logo {
		width: 280px;
		min-height: 280px;
	}
}

.logo__circle {
	position: absolute;
	display: inline-block;
	visibility: visible !important;
	overflow: hidden;
	border-radius: 100%;
	animation: logo__animation 1s ease-out 1;
	animation-fill-mode: both;
}

.logo__circle--1 {
	top: 66%;
	left: 45%;
	width: 26%;
	height: 26%;
	background-color: rgba(var(--logo--circle1--color));
	animation-delay: 1s;
}

.logo__circle--2 {
	top: 53%;
	left: 22%;
	width: 21%;
	height: 21%;
	background-color: var(--logo--circle2--color);
	animation-delay: 1.4s;
}

.logo__circle--3 {
	top: 38%;
	left: 46%;
	width: 18%;
	height: 18%;
	background-color: var(--logo--circle3--color);
	animation-delay: 1.8s;
}

.logo__circle--4 {
	top: 32%;
	left: 39.5%;
	width: 14%;
	height: 14%;
	background-color: var(--logo--circle4--color);
	animation-delay: 2.1s;
}

.logo__circle--5 {
	top: 17%;
	left: 52%;
	width: 12%;
	height: 12%;
	background-color: var(--logo--circle5--color);
	animation-delay: 2.4s;
}

.logo__circle--6 {
	top: 5%;
	left: 44%;
	width: 9%;
	height: 9%;
	background-color: var(--logo--circle6--color);
	animation-delay: 2.5s;
}

@keyframes logo__animation {
	0% {
		transform: translateY(-2000%);
	}
	50% {
		transform: translateY(30%);
	}
	65% {
		transform: translateY(-10%);
	}
	80% {
		transform: translateY(10%);
	}
	95% {
		transform: translateY(-5%);
	}
	100% {
		transform: translateY(0%);
	}
}
</style>