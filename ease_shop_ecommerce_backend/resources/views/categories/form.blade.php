@include('partials.validationerrors')
<div>
    <label class='label-control'>اسم القسم</label>
    <div class='col-6 mt-2'>
        <input type='text' class="form-control" name='cat_name' value="{{ old('cat_name', $category->cat_name ?? '') }}" />
    </div>
</div>
<div class="mt-4">
    <div class='col-6'>
        <label class='label-control'>القسم الرئيسي</label>
    </div>
    <div class="col-6">
        <select class='form-control mt-2' name='parent_id'>
            <option value=''>...</option>
            @forelse($categories as $cat)
            <option value={{ $cat->id }} @selected(old('parent_id', $category->parent_id ?? '') === $cat->id)>
                {{ $cat->cat_name }}
            </option>
            @empty
            <option disabled>لا يوجد اقسام</option>
            @endforelse
        </select>
    </div>
</div>
<div class="mt-4">
    <label class='label-control'>صورة القسم</label>
    <div class='col-6 mt-2'>
        <div class="file-wrapper form-control">
            <input name="old_image" id="oldImage" s
                value="{{ $category && $category->image ? asset('storage/' . $category->image) : '' }}" hidden />
            <input type='file' name='image' id='categoryImage' accept="image/*" />
        </div>
    </div>
</div>
<div class="mt-4">
    <label class='label-control'>صورة مصغرة</label>
    <div class='col-6 mt-2'>
        <div class="file-wrapper form-control">
            <input name="old_image_thumbnail" id="oldImage"
                value="{{ $category && $category->image_thumbnail ? asset('storage/' . $category->image_thumbnail) : '' }}"
                hidden />
            <input type='file' name='image_thumbnail' id='thumbnailCategoryImage' accept="image/*" />
        </div>
    </div>
</div>