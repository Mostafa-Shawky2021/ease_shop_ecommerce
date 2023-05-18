@extends('layout.app')

@section('header-content')
اضافة قسم
@endsection


@section('content')
<form class='mainform-app px-3 py-3' method="post" id="categoryForm" enctype='multipart/form-data'
    action="{{ route('categories.store') }}">
    @csrf
    @include('categories.form', ['category' => null])
    <div class="mt-4 text-end">
        <button class="btn-add">
            اضافة قسم
            <i class="icon fa fa-plus"></i>
        </button>
    </div>
</form>
@endsection