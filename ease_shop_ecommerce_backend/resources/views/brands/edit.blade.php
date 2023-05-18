@extends('layout.app')

@section('header-content')
<h5>تعديل لون </h5>
@endsection


@section('content')
@include('partials.validationerrors')
@php $routeParamter = ['brand'=> $brand->id] ;@endphp

@foreach ($errors->all() as $error)
<div class="alert alert-warining">{{ $error }}</div>
@endforeach
<div class="row">
    <div class="col-6">
        <form action="{{ route('brands.update', $routeParamter) }}" class="mainform-app py-3 px-3" method="post">
            @csrf
            @method('PUT')
            <div>
                <label class="label-control">اسم البراند</label>
                <div class="mt-3">
                    <input type="text" class="form-control" name="brand_name" id="variantInput" value="{{ $brand->brand_name }}">
                </div>
                <div class="mt-4">
                    <button class="btn-add d-block ms-auto" id="editBtn" style="border-radius:8px;font-size:0.8rem">
                        تعديل البراند
                        <i class="icon fa fa-edit"></i>
                    </button>
                </div>
        </form>
    </div>
</div>
@endsection