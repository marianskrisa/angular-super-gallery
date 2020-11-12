namespace angularSuperGallery {

	// container component options
	export interface IOptionsContainer {

		available: boolean;
		header?: {
			enabled?: boolean;
			dynamic?: boolean;
			buttons: Array<string>;
		};
		help?: boolean;
		visible?: boolean;
		visibleDefault?: boolean;
		caption?: {
			disabled?: boolean;
			visible?: boolean;
			position?: string;
			download?: boolean;
		};
		transition?: string;
		transitionSpeed?: number;
		title?: string;
		subtitle?: string;
		titleFromImage?: boolean;
		subtitleFromImage?: boolean;
		arrows?: {
			preload?: boolean;
			enabled?: boolean;
		};
		fullsize: boolean;
		size?: string;
		thumbnail?: IOptionsThumbnail;
		marginTop?: number;
		marginBottom?: number;
		click?: {
			close: boolean;
		};
		keycodes?: {
			exit?: Array<number>;
			playpause?: Array<number>;
			forward?: Array<number>;
			backward?: Array<number>;
			first?: Array<number>;
			last?: Array<number>;
			fullscreen?: Array<number>;
			menu?: Array<number>;
			caption?: Array<number>;
			help?: Array<number>;
			size?: Array<number>;
			transition?: Array<number>;
		};
		height?: number;
		heightMin?: number;
		heightAuto?: {
			initial?: boolean;
			onresize?: boolean;
		};
	}

	// modal component options
	export interface IOptionsModal {

		available: boolean;
		header?: {
			enabled?: boolean;
			dynamic?: boolean;
			buttons: Array<string>;
		};
		help?: boolean;
		caption?: {
			disabled?: boolean;
			visible?: boolean;
			position?: string;
			download?: boolean;
		};
		transition?: string;
		transitionSpeed?: number;
		title?: string;
		subtitle?: string;
		titleFromImage?: boolean;
		subtitleFromImage?: boolean;
		arrows?: {
			preload?: boolean;
			enabled?: boolean;
		};
		size?: string;
		thumbnail?: IOptionsThumbnail;
		marginTop?: number;
		marginBottom?: number;
		click?: {
			close: boolean;
		};
		keycodes?: {
			exit?: Array<number>;
			playpause?: Array<number>;
			forward?: Array<number>;
			backward?: Array<number>;
			first?: Array<number>;
			last?: Array<number>;
			fullscreen?: Array<number>;
			menu?: Array<number>;
			caption?: Array<number>;
			help?: Array<number>;
			size?: Array<number>;
			transition?: Array<number>;
		};
	}

	// panel component options
	export interface IOptionsPanel {

		available: boolean;
		visible?: boolean;
		size?: string;
		items?: {
			class?: string;
		},
		item?: {
			class?: string;
			caption: boolean;
			index: boolean;
		};
		hover?: {
			preload: boolean;
			select: boolean;
		};
		click?: {
			select: boolean;
			modal: boolean;
		};

	}

	// thumbnail component options
	export interface IOptionsThumbnail {

		available: boolean;
		height?: number;
		index?: boolean;
		enabled?: boolean;
		dynamic?: boolean;
		autohide: boolean;
		click?: {
			select: boolean;
			modal: boolean;
		};
		hover?: {
			preload: boolean;
			select: boolean;
		};
		loaded?: boolean;
		initialized?: boolean;

	}

	// info component options
	export interface IOptionsInfo {

	}

	// image component options
	export interface IOptionsImage {

		available: boolean;
		transition?: string;
		transitionSpeed?: number;
		size?: string;
		arrows?: {
			preload?: boolean;
			enabled?: boolean;
		};
		click?: {
			modal: boolean;
		};
		height?: number;
		heightMin?: number;
		heightAuto?: {
			initial?: boolean;
			onresize?: boolean;
		};
	}

	// gallery options
	export interface IOptions {

		debug?: boolean;
		baseUrl?: string;
		hashUrl?: boolean;
		duplicates?: boolean;
		selected?: number;
		fields?: {
			source?: {
				large?: string;
				small?: string;
				medium?: string;
				lazy?: string;
			}
			title?: string;
			subtitle?: string;
			description?: string;
			thumbnail?: string;
			video?: string;
		};
		autoplay?: {
			enabled?: boolean;
			delay?: number;
		};
		theme?: string;
		preload?: Array<number>;
		preloadNext?: boolean;
		preloadDelay?: number;
		loadingImage?: string;
		container?: IOptionsContainer;
		modal?: IOptionsModal;
		panel?: IOptionsPanel;
		image?: IOptionsImage;
		item?: IOptionsImage;
		thumbnail?: IOptionsThumbnail;

	}

	// image source
	export interface ISource {

		large: string; // original, required
		small?: string;
		medium?: string;
		lazy?: string;
		color?: string;

	}

	// image file
	export interface IFile {

		index: number;
		source: ISource;
		title?: string;
		subtitle?: string;
		name?: string;
		extension?: string;
		description?: string;
		video?: IVideo;
		download?: string;
		loaded?: {
			large?: boolean;
			medium?: boolean;
			small?: boolean;
		};
		width?: number;
		height?: number;

	}

	// video
	export interface IVideo {
		vimeoId: string;
		youtubeId?: string;
		htmlId: string;
		autoplay: boolean;
		paused: boolean;
		visible: boolean;
		playing: boolean;
		player: any
	}

	// vimeo options
	export interface IVimeoOptions {
		id?: string;
		responsive?: boolean;
		loop?: boolean;
	}

	export interface IOver {
		modalImage: boolean;
		panel: boolean;
	}

	export interface IEdit {
		id: number;
		delete?: number;
		add?: Array<IFile>;
		update?: Array<IFile>;
		refresh?: boolean;
		selected?: number;
		options?: IOptions;
		delayThumbnails?: number;
		delayRefresh?: number;
	}

	export interface IScope extends ng.IScope {
		forward: () => void;
		backward: () => void;
	}

	// service controller interface
	export interface IServiceController {

		modalVisible: boolean;
		panelVisible: boolean;
		modalAvailable: boolean;
		modalInitialized: boolean;
		transitions: Array<string>;
		themes: Array<string>;
		classes: string;
		options: IOptions;
		items: Array<IFile>;
		selected: number;
		file: IFile;
		files: Array<IFile>;
		sizes: Array<string>;
		id: string;
		isSingle: boolean;
		events: {
			CONFIG_LOAD: string;
			AUTOPLAY_START: string;
			AUTOPLAY_STOP: string;
			PARSE_IMAGES: string;
			LOAD_IMAGE: string;
			FIRST_IMAGE: string;
			CHANGE_IMAGE: string;
			DOUBLE_IMAGE: string;
			MODAL_OPEN: string;
			MODAL_CLOSE: string;
			GALLERY_UPDATED: string;
			GALLERY_EDIT: string;
			LAST_THUMBNAIL: string;
		};

		getInstance(component: any): IServiceController;

		setDefaults(): void;

		setOptions(options: IOptions): IOptions;

		setItems(items: Array<IFile>, force?: boolean): void;

		addImage(value: any, index?: number): IFile;

		preload(wait?: number): void;

		normalize(index: number): number;

		setFocus(): void;

		setSelected(index: number);

		containerFullSize(): void;

		modalOpen(index: number): void;

		modalClose(): void;

		modalClick($event?: UIEvent): void;

		thumbnailsMove(delay?: number): void;

		toBackward(stop?: boolean): void;

		toForward(stop?: boolean): void;

		toFirst(stop?: boolean): void;

		toLast(stop?: boolean): void;

		loadImage(index?: number): void;

		loadImages(indexes: Array<number>): void;

		hoverPreload(index: number): void;

		preloadImage(index: number, size: string): void;

		autoPlayToggle(): void;

		toggle(element: string): void;

		setHash(): void;

		downloadLink(): string;

		el(selector): NodeList;

		log(event: string, data?: any): void;

		event(event: string, data?: any);

		createVideo(file: IFile, options?: IVimeoOptions) : void;

		stopVideos() : void;

	}

	// service controller
	export class ServiceController {

		public version = "3.0.3";
		public slug = 'asg';
		public id: string;
		public items: Array<IFile> = [];
		public files: Array<IFile> = [];
		public direction: string;
		public modalAvailable = false;
		public modalInitialized = false;

		private instances: {} = {};
		private _selected: number;
		private _visible = false;
		private autoplay: angular.IPromise<any>;
		private first = false;
		private editing = false;

		public options: IOptions = null;
		public optionsLoaded = false;
		public defaults: IOptions = {
			debug: false, // image load, autoplay, etc. info in console.log
			hashUrl: true, // enable/disable hash usage in url (#asg-nature-4)
			baseUrl: '', // url prefix
			duplicates: false, // enable or disable same images (url) in gallery
			selected: 0, // selected image on init
			fields: {
				source: {
					large: 'url', // required, image url for modal component (large size)
					small: 'url', // image url for panel component (thumbnail size)
					medium: 'url', // image url for image (medium or custom size)
					lazy: null // image url for preload lowres image
				},
				title: 'title', // title field name
				subtitle: 'subtitle', // subtitle field name
				description: 'description', // description field name
				video: 'video', // video field name
			},
			autoplay: {
				enabled: false, // slideshow play enabled/disabled
				delay: 4100 // autoplay delay in millisecond
			},
			theme: 'default', // css style [default, darkblue, darkred, whitegold]
			preloadNext: false, // preload next image (forward/backward)
			preloadDelay: 770, // preload delay for preloadNext
			loadingImage: 'preload.svg', // loader image
			preload: [], // preload images by index number
			container: {
				available: false,
				fullsize: true,
				visible: false,
				title: '', // modal window title
				subtitle: '', // modal window subtitle
				titleFromImage: false, // force update the gallery title by image title
				subtitleFromImage: false, // force update the gallery subtitle by image description
				caption: {
					disabled: true, // disable image caption
					visible: true, // show/hide image caption
					position: 'top', // caption position [top, bottom]
					download: false // show/hide download link
				},
				header: {
					enabled: true, // enable/disable modal menu
					dynamic: false, // show/hide modal menu on mouseover
					buttons: ['playstop', 'index', 'prev', 'next', 'pin', 'size', 'transition', 'thumbnails', 'fullsize', 'fullscreen', 'help', 'close'],
				},
				help: false, // show/hide help
				arrows: {
					enabled: true, // show/hide arrows
					preload: false, // preload image on mouseover
				},
				click: {
					close: true // when click on the image close the modal
				},
				thumbnail: {
					available: false,
					height: 50, // thumbnail image height in pixel
					index: false, // show index number on thumbnail
					enabled: true, // enable/disable thumbnails
					dynamic: true, // if true thumbnails visible only when mouseover
					autohide: true, // hide thumbnail component when single image
					click: {
						select: true, // set selected image when true
						modal: false // open modal when true
					},
					hover: {
						preload: false, // preload image on mouseover
						select: false // set selected image on mouseover when true
					},
				},
				transition: 'slideLR', // transition effect
				transitionSpeed: 0.7, // transition speed 0.7s
				size: 'contain', // contain, cover, auto, stretch
				keycodes: {
					exit: [27], // esc
					playpause: [80], // p
					forward: [32, 39], // space, right arrow
					backward: [37], // left arrow
					first: [38, 36], // up arrow, home
					last: [40, 35], // down arrow, end
					fullscreen: [13], // enter
					menu: [77], // m
					caption: [67], // c
					help: [72], // h
					size: [83], // s
					transition: [84] // t
				},
				height: null, // height in pixel
				heightMin: null, // min height in pixel
				heightAuto: {
					initial: true, // calculate div height by first image
					onresize: false // calculate div height on window resize
				},
			},
			modal: {
				available: false,
				title: '', // modal window title
				subtitle: '', // modal window subtitle
				titleFromImage: false, // force update the gallery title by image title
				subtitleFromImage: false, // force update the gallery subtitle by image description
				caption: {
					disabled: false, // disable image caption
					visible: true, // show/hide image caption
					position: 'top', // caption position [top, bottom]
					download: false // show/hide download link
				},
				header: {
					enabled: true, // enable/disable modal menu
					dynamic: false, // show/hide modal menu on mouseover
					buttons: ['playstop', 'index', 'prev', 'next', 'pin', 'size', 'transition', 'thumbnails', 'fullscreen', 'help', 'close'],
				},
				help: false, // show/hide help
				arrows: {
					enabled: true, // show/hide arrows
					preload: false, // preload image on mouseover
				},
				click: {
					close: true // when click on the image close the modal
				},
				thumbnail: {
					available: false,
					height: 50, // thumbnail image height in pixel
					index: false, // show index number on thumbnail
					enabled: true, // enable/disable thumbnails
					dynamic: false, // if true thumbnails visible only when mouseover
					autohide: true, // hide thumbnail component when single image
					click: {
						select: true, // set selected image when true
						modal: false // open modal when true
					},
					hover: {
						preload: false, // preload image on mouseover
						select: false // set selected image on mouseover when true
					},
				},
				transition: 'slideLR', // transition effect
				transitionSpeed: 0.7, // transition speed 0.7s
				size: 'cover', // contain, cover, auto, stretch
				keycodes: {
					exit: [27], // esc
					playpause: [80], // p
					forward: [32, 39], // space, right arrow
					backward: [37], // left arrow
					first: [38, 36], // up arrow, home
					last: [40, 35], // down arrow, end
					fullscreen: [13], // enter
					menu: [77], // m
					caption: [67], // c
					help: [72], // h
					size: [83], // s
					transition: [84] // t
				}
			},
			thumbnail: {
				available: false,
				height: 50, // thumbnail image height in pixel
				index: false, // show index number on thumbnail
				dynamic: false, // if true thumbnails visible only when mouseover
				autohide: false, // hide thumbnail component when single image
				click: {
					select: true, // set selected image when true
					modal: false // open modal when true
				},
				hover: {
					preload: true, // preload image on mouseover
					select: false // set selected image on mouseover when true
				},
			},
			panel: {
				available: false,
				visible: true,
				size: 'cover', // contain, cover, auto, stretch
				items: {
					class: 'row', // items class
				},
				item: {
					class: 'col-md-3', // item class
					caption: false, // show/hide image caption
					index: false, // show/hide image index
				},
				hover: {
					preload: false, // preload image on mouseover
					select: false // set selected image on mouseover when true
				},
				click: {
					select: false, // set selected image when true
					modal: true // open modal when true
				},
			},
			image: {
				available: false,
				transition: 'slideLR', // transition effect
				transitionSpeed: 0.7, // transition speed 0.7s
				size: 'cover', // contain, cover, auto, stretch
				arrows: {
					enabled: false,  // show/hide arrows
					preload: false, // preload image on mouseover
				},
				click: {
					modal: true // when click on the image open the modal window
				},
				height: null, // height in pixel
				heightMin: null, // min height in pixel
				heightAuto: {
					initial: true, // calculate div height by first image
					onresize: false // calculate div height on window resize
				},
			},
			item: {
				available: false,
				transition: 'slideLR', // transition effect
				transitionSpeed: 0.7, // transition speed 0.7s
				size: 'cover', // contain, cover, auto, stretch
				arrows: {
					enabled: false,  // show/hide arrows
					preload: false, // preload image on mouseover
				},
				click: {
					modal: true // when click on the image open the modal window
				},
				height: null, // height in pixel
				heightMin: null, // min height in pixel
				heightAuto: {
					initial: true, // calculate div height by first image
					onresize: false // calculate div height on window resize
				},
			}
		};

		// available image sizes
		public sizes: Array<string> = [
			'contain',
			'cover',
			'auto',
			'stretch'
		];

		// available themes
		public themes: Array<string> = [
			'default',
			'darkblue',
			'whitegold'
		];

		// available transitions
		public transitions: Array<string> = [
			'no',
			'fadeInOut',
			'zoomIn',
			'zoomOut',
			'zoomInOut',
			'rotateLR',
			'rotateTB',
			'rotateZY',
			'slideLR',
			'slideTB',
			'zlideLR',
			'zlideTB',
			'flipX',
			'flipY'
		];

		public events = {
			CONFIG_LOAD: 'ASG-config-load-',
			AUTOPLAY_START: 'ASG-autoplay-start-',
			AUTOPLAY_STOP: 'ASG-autoplay-stop-',
			PARSE_IMAGES: 'ASG-parse-images-',
			LOAD_IMAGE: 'ASG-load-image-',
			FIRST_IMAGE: 'ASG-first-image-',
			CHANGE_IMAGE: 'ASG-change-image-',
			DOUBLE_IMAGE: 'ASG-double-image-',
			MODAL_OPEN: 'ASG-modal-open-',
			MODAL_CLOSE: 'ASG-modal-close-',
			THUMBNAIL_MOVE: 'ASG-thumbnail-move-',
			GALLERY_UPDATED: 'ASG-gallery-updated-',
			LAST_THUMBNAIL: 'ASG-last-thumbnail-',
			GALLERY_EDIT: 'ASG-gallery-edit',
		};

		constructor(private timeout: ng.ITimeoutService,
			private interval: ng.IIntervalService,
			private location: ng.ILocationService,
			private $rootScope: ng.IRootScopeService,
			private $window: ng.IWindowService,
			private $sce: ng.ISCEService) {

			angular.element($window).bind('resize', (event) => {
				this.thumbnailsMove(200);
			});

			// update images when edit event
			$rootScope.$on(this.events.GALLERY_EDIT, (event, data) => {
				if (this.instances[data.id]) {
					this.instances[data.id].editGallery(data);
				}
			});

		}

		private parseHash() {

			if (!this.id) {
				return;
			}

			if (!this.options.hashUrl) {
				return;
			}

			let hash = this.location.hash();
			let parts = hash ? hash.split('-') : null;

			if (parts === null) {
				return;
			}

			if (parts[0] !== this.slug) {
				return;
			}

			if (parts.length !== 3) {
				return;
			}

			if (parts[1] !== this.id) {
				return;
			}

			let index = parseInt(parts[2], 10);

			if (!angular.isNumber(index)) {
				return;
			}

			this.timeout(() => {

				index--;
				this.selected = index;
				this.modalOpen(index);

			}, 20);

		}

		// calculate object hash id
		public objectHashId(object: any): string {

			let string = JSON.stringify(object);

			if (!string) {
				return null;
			}

			let abc = string.replace(/[^a-zA-Z0-9]+/g, '');
			let code = 0;

			for (let i = 0, n = abc.length; i < n; i++) {
				let charcode = abc.charCodeAt(i);
				code += (charcode * i);
			}

			return 'id' + code.toString(21);

		}

		// get service instance for current gallery by component id
		public getInstance(component: any) {

			if (!component.id) {

				// get parent asg component id
				if (component.$scope && component.$scope.$parent && component.$scope.$parent.$parent && component.$scope.$parent.$parent.$ctrl) {
					component.id = component.$scope.$parent.$parent.$ctrl.id;
				} else {
					component.id = this.objectHashId(component.options ? component.options : { 'asg': 1 });
				}

			}

			const id = component.id;
			let instance = this.instances[id];

			// new instance and set options and items
			if (instance === undefined) {
				instance = new ServiceController(this.timeout, this.interval, this.location, this.$rootScope, this.$window, this.$sce);
				instance.id = id;
			}

			if (component.baseUrl) {
				component.options.baseUrl = component.baseUrl;
			}

			instance.setOptions(component.options);

			if (component.items) {
				instance.setItems(component.items);
			}

			instance.selected = component.selected ? component.selected : instance.options.selected;
			instance.parseHash();

			if (instance.options) {

				//instance.loadImages(instance.options.preload);

				if (instance.options.autoplay && instance.options.autoplay.enabled && !instance.autoplay) {
					instance.autoPlayStart();
				}

			}

			this.instances[id] = instance;
			return instance;

		}

		// prepare images array
		public setItems(items: Array<IFile>) {

			this.items = items ? items : [];
			this.prepareItems();

		}

		// options setup
		public setOptions(options: IOptions) {

			// if options already setup
			if (this.optionsLoaded) {
				return;
			}

			this.options = angular.copy(this.defaults);

			if (options) {

				angular.merge(this.options, options);

				let modalHeaderButtons = options.modal && options.modal.header && options.modal.header.buttons;
				let containerHeaderButtons = options.container && options.container.header && options.container.header.buttons;

				if (modalHeaderButtons) {

					this.options.modal.header.buttons = options.modal.header.buttons;

					// remove duplicates from buttons
					this.options.modal.header.buttons = this.options.modal.header.buttons.filter(function (x, i, a) {
						return a.indexOf(x) === i;
					});

				}

				if (containerHeaderButtons) {

					this.options.container.header.buttons = options.container.header.buttons;

					// remove duplicates from buttons
					this.options.container.header.buttons = this.options.container.header.buttons.filter(function (x, i, a) {
						return a.indexOf(x) === i;
					});

				}

				this.optionsLoaded = true;

			}

			// if !this.$window.screenfull
			if (!this.$window.screenfull) {
				this.options.modal.header.buttons = this.options.modal.header.buttons.filter(function (x, i, a) {
					return x !== 'fullscreen';
				});
			}


			// important!
			options = this.options;

			this.event(this.events.CONFIG_LOAD, this.options);

			return this.options;

		}

		// set selected image
		public set selected(v: number) {

			v = this.normalize(v);
			let prev = this._selected;

			if (prev != v && this.file && this.file.video && this.file.video.playing) {
				this.file.video.player.pause();
				this.file.video.paused = true;
			}

			this._selected = v;

			if (this.options.container.available && this.options.container.visible) {
				this.preloadImage(this._selected, 'large');
			}

			//this.loadImage(this._selected);
			// this.preload();

			if (this.file) {

				if (this.options.modal.titleFromImage && this.file.title) {
					this.options.modal.title = this.file.title;
				}

				if (this.options.modal.subtitleFromImage && this.file.description) {
					this.options.modal.subtitle = this.file.description;
				}

				if (this.file.video && this.file.video.paused) {
					this.file.video.player.play();
					this.file.video.paused = false;
				}

			}

			if (prev !== this._selected) {

				this.thumbnailsMove();
				this.event(this.events.CHANGE_IMAGE, {
					index: v,
					file: this.file
				});

			}

			this.options.selected = this._selected;

		}

		// get selected image
		public get selected() {

			return this._selected;

		}

		// force select image
		public forceSelect(index) {

			index = this.normalize(index);
			this._selected = index;
			this.loadImage(this._selected);
			this.preload();
			this.event(this.events.CHANGE_IMAGE, {
				index: index,
				file: this.file
			});

		}


		public setSelected(index: number) {

			this.autoPlayStop();
			this.direction = index > this.selected ? 'forward' : 'backward';
			this.selected = index;
			this.setHash();

		}


		// go to backward
		public toBackward(stop?: boolean) {

			if (stop) {
				this.autoPlayStop();
			}

			this.direction = 'backward';
			this.selected--;
			this.setHash();

		}

		// go to forward
		public toForward(stop?: boolean) {

			if (stop) {
				this.autoPlayStop();
			}

			this.direction = 'forward';
			this.selected++;
			this.setHash();

		}

		// go to first
		public toFirst(stop?: boolean) {

			if (stop) {
				this.autoPlayStop();
			}

			this.direction = 'backward';
			this.selected = 0;
			this.setHash();

		}

		// go to last
		public toLast(stop?: boolean) {

			if (stop) {
				this.autoPlayStop();
			}

			this.direction = 'forward';
			this.selected = this.items.length - 1;
			this.setHash();

		}

		public setHash() {

			if (this.modalVisible && this.options.hashUrl) {
				this.location.hash([this.slug, this.id, this.selected + 1].join('-'));
			}

		}

		public autoPlayToggle() {

			if (this.options.autoplay.enabled) {
				this.autoPlayStop();
			} else {
				this.autoPlayStart();
			}

		}


		public autoPlayStop() {

			if (!this.autoplay) {
				return;
			}

			this.interval.cancel(this.autoplay);
			this.options.autoplay.enabled = false;
			this.autoplay = null;
			this.event(this.events.AUTOPLAY_STOP, { index: this.selected, file: this.file });

		}

		public autoPlayStart() {

			if (this.autoplay) {
				return;
			}

			this.options.autoplay.enabled = true;
			this.autoplay = this.interval(() => {
				this.toForward();
			}, this.options.autoplay.delay);

			this.event(this.events.AUTOPLAY_START, { index: this.selected, file: this.file });

		}


		private prepareItems() {

			let length = this.items.length;
			for (let key = 0; key < length; key++) {
				this.addImage(this.items[key]);
			}

			this.event(this.events.PARSE_IMAGES, this.files);

		}

		// preload the image when mouseover
		public hoverPreload(index: number) {

			this.loadImage(index);

		}

		// image preload
		private preload(wait?: number) {

			let index = this.direction === 'forward' ? this.selected + 1 : this.selected - 1;

			if (this.options.preloadNext === true) {
				this.timeout(() => {
					this.loadImage(index);
				}, (wait !== undefined) ? wait : this.options.preloadDelay);
			}

		}

		public normalize(index: number) {

			let last = this.files.length - 1;

			if (index > last) {
				return (index - last) - 1;
			}

			if (index < 0) {
				return last - Math.abs(index) + 1;
			}

			return index;

		}


		public loadImages(indexes: Array<number>, type: string) {

			if (!indexes || indexes.length === 0) {
				return;
			}

			let self = this;

			indexes.forEach((index: number) => {
				self.loadImage(index);
			});

		}


		public preloadImage(index, size, callback?: {}) {

			index = index ? index : this.selected;
			index = this.normalize(index);

			if (!this.files[index]) {
				this.log('invalid file index', { index: index });
				return;
			}

			if (this.files[index].loaded[size] === true) {
				return;
			}

			let img = new Image();
			img.src = this.files[index].source[size];
			img.addEventListener('load', (event) => {
				this.afterLoad(index, size, img);
			});

		}

		public loadImage(index?: number, callback?: {}) {

			index = index ? index : this.selected;
			index = this.normalize(index);

			if (!this.files[index]) {
				this.log('invalid file index', { index: index });
				return;
			}

			if (this.modalVisible) {

				if (this.files[index].loaded.large === true) {
					return;
				}

				let large = new Image();
				large.src = this.files[index].source.large;
				large.addEventListener('load', (event) => {
					this.afterLoad(index, 'large', large);
				});

			} else {

				if (this.files[index].loaded.medium === true) {
					return;
				}

				let medium = new Image();
				medium.src = this.files[index].source.medium;
				medium.addEventListener('load', () => {
					this.afterLoad(index, 'medium', medium);
				});

			}

		}

		// get file name
		private getFilename(index: number, type?: string) {

			type = type ? type : 'modal';
			let fileparts = this.files[index].source[type].split('/');
			let filename = fileparts[fileparts.length - 1];
			return filename;

		}

		// get file extension
		private getExtension(index: number, type?: string) {

			type = type ? type : 'modal';
			let fileparts = this.files[index].source[type].split('.');
			let extension = fileparts[fileparts.length - 1];
			return extension;

		}

		// after load image
		private afterLoad(index, type, image) {

			if (!this.files[index] || !this.files[index].loaded) {
				return;
			}

			if (this.files[index].loaded[type] === true) {
				this.files[index].loaded[type] = true;
				return;
			}

			if (type === 'large') {
				this.files[index].width = image.width;
				this.files[index].height = image.height;
				this.files[index].name = this.getFilename(index, type);
				this.files[index].extension = this.getExtension(index, type);
				this.files[index].download = this.files[index].source.large;
			}

			this.files[index].loaded[type] = true;

			let data = { type: type, index: index, file: this.file, img: image };

			if (!this.first) {
				this.first = true;
				this.event(this.events.FIRST_IMAGE, data);
			} else {
				this.event(this.events.LOAD_IMAGE, data);
			}

		}


		// is single?
		public get isSingle() {

			return this.files.length > 1 ? false : true;

		}


		// get the download link
		public downloadLink() {

			if (this.selected !== undefined && this.files.length > 0) {
				return this.files[this.selected].source.large;
			}

		}


		// get the file
		public get file(): IFile {

			return this.files[this.selected];

		}

		// toggle element visible
		public toggle(element: string): void {

			this.options[element].visible = !this.options[element].visible;

		}


		// get visible
		public get modalVisible(): boolean {

			return this._visible;

		}


		// get theme
		public get theme(): string {

			return this.options.theme;

		}

		// get classes
		public get classes(): string {

			return 'asg-theme-' + this.options.theme + ' ' + this.id + (this.editing ? ' editing' : '');

		}

		// get preload style
		public dynamicStyle(file: IFile, type: string, config: IOptionsModal | IOptionsImage) {

			let style = {};

			if (!file) {
				return style;
			}

			if (file.source.color) {
				style['background-color'] = file.source.color;
			}

			if (this.options.loadingImage && file.loaded[type] === false) {
				style['background-image'] = 'url(' + this.options.loadingImage + ')';
			}

			if (config.transitionSpeed !== undefined && config.transitionSpeed !== null) {
				style['transition'] = 'all ease ' + config.transitionSpeed + 's';
			}

			return style;

		}

		// get placeholder style
		public placeholderStyle(file: IFile, type: string) {

			let style = {};

			return style;

			if (!file) {
				return style;
			}

			if (this.options[type].placeholder) {

				let index = this.options[type].placeholder;
				let isFull = (index.indexOf('//') === 0 || index.indexOf('http') === 0) ? true : false;
				let source;

				if (isFull) {
					source = index;
				} else {
					source = file.source[index];
				}

				if (source) {
					style['background-image'] = 'url(' + source + ')';
				}

			}

			if (file.source.color) {
				style['background-color'] = file.source.color;
			}

			if (file.source.lazy) {
				style['background-image'] = 'url(' + file.source.lazy + ')';
			}

			return style;

		}

		// set visible
		public set modalVisible(value: boolean) {

			this._visible = value;

			// set index 0 if !selected
			this.selected = this.selected ? this.selected : 0;

			let body = document.body;
			let className = 'asg-yhidden';

			if (value) {

				if (body.className.indexOf(className) < 0) {
					body.className = body.className + ' ' + className;
				}

				this.modalInit();

			} else {

				body.className = body.className.replace(className, '').trim();

			}

		}

		// initialize the gallery
		private modalInit() {

			let self = this;

			this.timeout(() => {
				self.setFocus();
			}, 100);

			this.timeout(() => {
				this.modalInitialized = true;
			}, 460);

		}


		public modalOpen(index: number) {

			if (!this.modalAvailable) {
				return;
			}

			this.selected = index !== undefined ? index : this.selected;
			this.modalVisible = true;
			this.loadImage();
			this.setHash();
			this.event(this.events.MODAL_OPEN, { index: this.selected });

		}

		public modalClose() {

			if (this.options.hashUrl) {
				this.location.hash('');
			}

			this.modalInitialized = false;
			this.modalVisible = false;
			this.loadImage();
			this.event(this.events.MODAL_CLOSE, { index: this.selected });

		}

		// move thumbnails to correct position
		public thumbnailsMove(delay?: number) {

			let move = () => {

				let containers = this.el('div.asg-thumbnail.' + this.id);

				if (!containers.length) {
					return;
				}

				for (let i = 0; i < containers.length; i++) {

					let container: any = containers[i];

					if (container.offsetWidth) {

						let items: any = container.querySelector('div.items');
						let item: any = container.querySelector('div.item');
						let thumbnail, moveX, remain;

						if (item) {

							if (items.scrollWidth > container.offsetWidth) {
								thumbnail = items.scrollWidth / this.files.length;
								moveX = (container.offsetWidth / 2) - (this.selected * thumbnail) - thumbnail / 2;
								remain = items.scrollWidth + moveX;
								moveX = moveX > 0 ? 0 : moveX;
								moveX = remain < container.offsetWidth ? container.offsetWidth - items.scrollWidth : moveX;
							} else {
								thumbnail = this.getRealWidth(item);
								moveX = (container.offsetWidth - thumbnail * this.files.length) / 2;
							}

							items.style.left = moveX + 'px';

							this.event(this.events.THUMBNAIL_MOVE, {
								thumbnail: thumbnail,
								move: moveX,
								remain: remain,
								container: container.offsetWidth,
								items: items.scrollWidth
							});

						}

					}

				}
			};

			if (delay) {
				this.timeout(() => {
					move();
				}, delay);
			} else {
				move();
			}


		}

		public modalClick($event?: UIEvent) {

			if ($event) {
				$event.stopPropagation();
			}

			this.setFocus();

		}

		// set the focus
		public setFocus() {


			let path = 'div.asg-container.' + this.id + ' .keyInput';
			let element: Node = this.el(path)[0];

			this.log('set focus', [path, element]);

			if (element) {
				angular.element(element)[0]['focus']();
			}

		}

		public containerFullSize() {

			if (!this.options.container.available) {
				return;
			}

			this.options.container.fullsize = true;
			this.options.container.visible = true;

			this.timeout(() => {
				this.setFocus();
			}, 100);

			this.timeout(() => {
				this.event(this.events.MODAL_OPEN, { index: this.selected });
			}, 460);

		}

		public event(event: string, data?: any) {

			event = event + this.id;
			this.$rootScope.$emit(event, data);
			this.log(event, data);

		}

		public log(event: string, data?: any) {

			if (this.options.debug) {
				console.log(event, data ? data : null);
			}

		}

		// get element
		public el(selector): NodeList {

			return document.querySelectorAll(selector);

		}

		// calculating element real width
		public getRealWidth(item) {

			let style = item.currentStyle || window.getComputedStyle(item),
				width = item.offsetWidth,
				margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight),
				// padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight),
				border = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

			return width + margin + border;

		}

		// calculating element real height
		public getRealHeight(item) {

			let style = item.currentStyle || window.getComputedStyle(item),
				height = item.offsetHeight,
				margin = parseFloat(style.marginTop) + parseFloat(style.marginBottom),
				// padding = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom),
				border = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

			return height + margin + border;

		}


		// edit gallery
		public editGallery(edit: IEdit) {

			this.editing = true;
			let selected = this.selected;

			if (edit.options !== undefined) {
				this.optionsLoaded = false;
				this.setOptions(edit.options);
			}

			if (edit.delete !== undefined) {
				this.deleteImage(edit.delete);
			}

			if (edit.add) {
				let length = edit.add.length;
				for (let key = 0; key < length; key++) {
					this.addImage(edit.add[key]);
				}
			}

			if (edit.update) {

				let length = edit.update.length;

				for (let key = 0; key < length; key++) {
					this.addImage(edit.update[key], key);
				}

				let count = this.files.length - edit.update.length;
				if (count > 0) {
					this.deleteImage(length, count);
				}
			}

			if (edit.selected >= 0) {
				selected = edit.selected;
			}

			if (edit.selected == -1) {
				selected = this.files.length - 1;
			}

			selected = this.files[selected] ? selected : (selected >= this.files.length ? this.files.length - 1 : 0);
			this.forceSelect(this.files[selected] ? selected : 0);

			this.timeout(() => {

				this.editing = false;
				this.event(this.events.GALLERY_UPDATED, edit);
				this.thumbnailsMove(edit.delayThumbnails !== undefined ? edit.delayThumbnails : 220);
				this.event(this.events.LAST_THUMBNAIL);

			}, (edit.delayRefresh !== undefined ? edit.delayRefresh : 420));

		}


		// delete image
		public deleteImage(index: number, count?: number) {

			index = index === null || index === undefined ? this.selected : index;
			count = count ? count : 1;

			this.files.splice(index, count);

		}

		// find image in gallery by modal source
		public findImage(filename: string) {

			let length = this.files.length;

			for (let key = 0; key < length; key++) {
				if (this.files[key].source.large === filename) {
					return this.files[key];
				}
			}

			return false;

		}


		public getFullUrl(url: string, baseUrl?: string) {

			baseUrl = baseUrl === undefined ? this.options.baseUrl : baseUrl;
			let isFull = (url.indexOf('//') === 0 || url.indexOf('http') === 0) ? true : false;

			return isFull ? url : baseUrl + url;

		}

		// add image
		public addImage(value: any, index?: number): IFile {

			const self = this;

			if (value === undefined || value === null) {
				self.log('invalid image value');
				return;
			}

			if (angular.isString(value) === true) {
				value = { source: { medium: value } };
			}

			let getAvailableSource = function (type: string, src: ISource) {

				if (src[type]) {

					return self.getFullUrl(src[type]);

				} else {

					if (type === 'small') {
						type = 'medium';
						if (src[type]) {
							return self.getFullUrl(src[type]);
						}
					}

					if (type === 'medium') {
						type = 'large';
						if (src[type]) {
							return self.getFullUrl(src[type]);
						}
					}

					if (type === 'large') {
						type = 'medium';
						if (src[type]) {
							return self.getFullUrl(src[type]);
						}
					}

					if (type === 'lazy') {
						type = 'medium';
						if (src[type]) {
							return self.getFullUrl(src[type]);
						}
					}

				}

			};

			if (!value.source) {
				value.source = {
					large: value[self.options.fields.source.large],
					small: value[self.options.fields.source.small],
					medium: value[self.options.fields.source.medium],
					lazy: value[self.options.fields.source.lazy],
				};
			}

			let source = {
				large: getAvailableSource('large', value.source),
				small: getAvailableSource('small', value.source),
				medium: getAvailableSource('medium', value.source),
				lazy: getAvailableSource('lazy', value.source),
				color: value.color ? value.color : 'transparent',
			};

			let sizes = {
				large: '1920w',
				medium: '1024w',
				small: '480w',
			}

			if (!source.large) {
				self.log('invalid image data', { source: source, value: value });
				return;
			}

			if (source.large.indexOf(' ') > 0) {
				let parts = source.large.split(' ');
				sizes.large = parts[1].trim();
				source.large = parts[0].trim();
			}

			if (source.medium.indexOf(' ') > 0) {
				let parts = source.medium.split(' ');
				sizes.medium = parts[1].trim();
				source.medium = parts[0].trim();
			}

			if (source.small.indexOf(' ') > 0) {
				let parts = source.small.split(' ');
				sizes.small = parts[1].trim();
				source.small = parts[0].trim();
			}


			let parts = source.large.split('/');
			let filename = parts[parts.length - 1];
			let title, subtitle, description, video;

			if (self.options.fields !== undefined) {
				title = value[self.options.fields.title] ? value[self.options.fields.title] : filename;
				subtitle = value[self.options.fields.subtitle] ? value[self.options.fields.subtitle] : null;
				description = value[self.options.fields.description] ? value[self.options.fields.description] : null;
				video = value[self.options.fields.video] ? value[self.options.fields.video] : null;
			} else {
				title = filename;
				subtitle = null;
				description = null;
				video = null;
			}

			let file = {
				index: index,
				source: source,
				sizes: sizes,
				title: title,
				subtitle: subtitle,
				description: description,
				video: video && video.vimeoId ? video : null,
				'class': value.class ? value.class : '',
				loaded: {
					large: false,
					medium: false,
					small: false
				}
			};

			if (index !== undefined && this.files[index] !== undefined) {
				this.files[index] = file;
				return file;
			} else {

				if (self.options.duplicates !== true && this.findImage(file.source.large)) {
					self.event(self.events.DOUBLE_IMAGE, file);
					return;
				}

				this.files.push(file);
				file.index = this.files.length - 1;

				return file;

			}

		}


		// create video player
		public createVideo(file: IFile, options?: IVimeoOptions) : void {

			if (!file.video || !file.video.vimeoId) {
				return;
			}

			options = options === undefined ? {} : options;
			options.id = file.video.vimeoId;
			options.responsive = options.responsive ? options.responsive : true;;
			options.loop = options.loop ? options.loop : false;

			file.video.htmlId = 'modal_vimeo_video_' + file.video.vimeoId;
			file.video.player = new Vimeo.Player(file.video.htmlId, options);
			file.video.player.setVolume(0.77);

		}

		public stopVideos() : void {

			this.files.forEach((item) => {
				if (item.video && item.video.player) {
					 item.video.paused = true;
					 item.video.visible = false;
					 item.video.playing = false;
				}
			});

		}

	}

	let app: ng.IModule = angular.module('angularSuperGallery');

	app.service('asgService', ['$timeout', '$interval', '$location', '$rootScope', '$window', '$sce', ServiceController]);

}

