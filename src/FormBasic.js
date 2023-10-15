import {useForm} from "react-hook-form";

export default function FormBasic () {
    const defaultValues = {
        name: '山田太郎',
        email: 'admin@exmple.com',
        gender: 'male',
        memo: ''
    }

    const {register, handleSubmit, formState: {errors, isDirty, isValid, isSubmitting}} = useForm({
        defaultValues
    })

    const onsubmit = data => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
                console.log(data)
            }, 4000)
        })
    }
    const onerror = err => console.log(err)

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <label htmlFor="name">名前：</label><br/>
                <input id={"name"} type={"text"}
                       {...register("name", {
                           required: "名前は必須です",
                           maxLength: {
                               value: 20,
                               message: "名前は20文字以内で入力してください"
                           }
                       })}
                />
                <div>
                    {errors.name?.message}
                </div>
            </div>
            <div>
                <label htmlFor={"gender"}>性別：</label><br/>
                <label>
                    <input type={"radio"} value={"male"}
                           {...register('gender',
                               {required: '性別は必須です。'})}/>男性
                </label>
                <label>
                    <input type={"radio"} value={"female"}
                           {...register('gender', {required: '性別は必須です。'})}/>女性
                </label>
                <div>
                    {errors.email?.message}
                </div>
            </div>
            <div>
                <label htmlFor={"email"}>メールアドレス：</label><br/>
                <input id={"email"} type={"email"}
                       {...register('email', {
                               required: 'メールアドレスは必須です。',
                               pattern: {
                                   value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                   message: 'メールアドレスの形式が正しくありません。'
                               }
                           }
                       )}/>
                <div>
                    {errors.email?.message}
                </div>
            </div>
            <div>
                <label htmlFor={"memo"}>メモ：</label><br/>
                <textarea id={"memo"} {...register('memo', {
                    required: 'メモは必須です。',
                    minLength: {
                        value: 10,
                        message: 'メモは10文字以上で入力してください。'
                    },
                    validate: {
                        ng: (value, formValues) => {
                            const ngs = ['NG', 'ng', 'いや', 'ダメ']
                            for (const ng of ngs) {
                                if (value.includes(ng)) {
                                    return 'メモにNGワードが含まれています。'
                                }
                            }
                            return true
                        }
                    }
                })}/>
            </div>
            <div>
                {errors.email?.message}
            </div>
            <button type={"submit"} disabled={!isDirty || !isValid || isSubmitting}>送信</button>
            {isSubmitting && <div>送信中...</div>}
        </form>
    )
}