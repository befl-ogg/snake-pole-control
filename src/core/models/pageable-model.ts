export interface PageableModel<T> {
	content: Array<T>;
	pageable: {
		sort: SortModel;
		offset: number;
		pageNumber: number;
		pageSize: number;
		paged: boolean;
		unpaged: boolean;
	};
	last: boolean;
	totalPages: number;
	totalElements: number;
	size: number;
	number: number;
	sort: SortModel;
	first: boolean;
	numberOfElements: number;
	empty: boolean;
}

export interface SortModel {
	empty: boolean;
	sorted: boolean;
	unsorted: boolean;
}
