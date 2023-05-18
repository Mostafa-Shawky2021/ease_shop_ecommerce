@extends('layout.app')

@section('header-content')
تعديل محتوي الفوتر
@endsection

@section('content')

<form class='mainform-app px-3 py-3' style="margin-top:1rem;" method="post"
    action="{{ route('footer.update',['footer'=>$footer->id]) }}">
    @csrf
    @method('PUT')
    @include('layoutfront.homepage.footer.form', [
    'footer' => $footer,
    ])
    <div class="mt-4 text-end">
        <button class="btn-add">
            تعديل المحتوي
            <i class="icon fa fa-edit"></i>
        </button>
    </div>
</form>
@endsection