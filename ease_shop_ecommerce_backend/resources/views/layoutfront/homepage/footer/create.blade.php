@extends('layout.app')

@section('header-content')
اضافة محتوي الفوتر
@endsection

@section('content')

<form class='mainform-app px-3 py-3' style="margin-top:1rem;" method="post" action="{{ route('footer.store') }}">
    @csrf
    @include('layoutfront.homepage.footer.form', [
    'footer' => null,
    ])
    <div class="mt-4 text-end">
        <button class="btn-add">
            اضافة المحتوي
            <i class="icon fa fa-plus"></i>
        </button>
    </div>
</form>
@endsection