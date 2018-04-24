<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      基本的な利用例です。
    </template>

    <!-- dialog1 -->
    <vt@dialog-fragment>
      <vt@btn primary>Dialog 1</vt@btn>
      <vt@dialog
        ref="dialog1"
        fullscreen
        scrollable
        :backdrop="false"
        transition="vc@dialog-bottom-transition"
      >
        <vt@card>
          <vt@toolbar info>
            <vt@btn icon="close" @click.stop="$refs.dialog1.close" />
            <vt@toolbar-title>Settings</vt@toolbar-title>
            <vt@spacer />
            <vt@toolbar-items>
              <vt@btn flat @click.stop="$refs.dialog1.close">Save</vt@btn>
            </vt@toolbar-items>
            <vt@menu-fragment>
              <vt@toolbar-side-icon />
              <vt@menu bottom right offset-y>
                <vt@tile-group>
                  <vt@tile v-for="n in 5" :key="5" @click>
                    <vt@tile-title>MENU {{n}}</vt@tile-title>
                  </vt@tile>
                </vt@tile-group>
              </vt@menu>
            </vt@menu-fragment>
          </vt@toolbar>
          <vt@card-text>
            <div>
              <vt@btn info @click.stop="$refs.dialog2.show">Dialog 2</vt@btn>
              <vt@btn info @click.stop="$refs.dialog3.show">Dialog 3</vt@btn>
              <vt@btn info @click.stop="$refs.dialog4.show">Dialog 4</vt@btn>
              <vt@tooltip-fragment>
                <vt@btn secondary>ツールチップ</vt@btn>
                <vt@tooltip>あいうえお</vt@tooltip>
              </vt@tooltip-fragment>
            </div>

            <p v-for="n in 20" :key="n">テキストが入ります。</p>
          </vt@card-text>
        </vt@card>
      </vt@dialog>
    </vt@dialog-fragment>

    <!-- dialog2 -->
    <vt@dialog-fragment>
      <vt@btn primary>Dialog 2</vt@btn>
      <vt@dialog
        ref="dialog2"
      >
        <vt@card>
          <vt@card-title>
            Dialog 2
          </vt@card-title>
          <vt@card-text>
            <p>このダイアログはscrollable設定されていないので、ウィンドウをはみ出してスクロールします</p>
            <vt@menu-fragment>
              <vt@btn info>子メニュー</vt@btn>
              <vt@menu offset-y>
                <vt@card>
                  <vt@card-text>メニューです</vt@card-text>
                </vt@card>
              </vt@menu>
            </vt@menu-fragment>
            <vt@btn info @click.stop="$refs.dialog1.show">Dialog 1</vt@btn>
            <vt@btn info @click.stop="$refs.dialog3.show">Dialog 3</vt@btn>
            <vt@btn info @click.stop="$refs.dialog4.show">Dialog 4</vt@btn>

            <vt@select>
              <vt@option value="1">選択肢1</vt@option>
              <vt@option value="2">選択肢2</vt@option>
              <vt@option value="3">選択肢3</vt@option>
            </vt@select>

            <p v-for="n in 20" :key="n">これはダイアログ2です。これはダイアログ2です。これはダイアログ2です。これはダイアログ2です。これはダイアログ2です。これはダイアログ2です。</p>
          </vt@card-text>
          <vt@card-actions>
            <vt@btn text-color="info" @click.stop="$refs.dialog2.close">CLOSE</vt@btn>
          </vt@card-actions>
        </vt@card>
      </vt@dialog>
    </vt@dialog-fragment>

    <!-- dialog3 -->
    <vt@dialog-fragment>
      <vt@btn primary>Dialog 3</vt@btn>
      <vt@dialog
        ref="dialog3"
        max-width="500"
      >
        <vt@card>
          <vt@card-title>
            <span>Dialog 3</span>
            <vt@spacer />
            <vt@menu-fragment>
              <vt@btn icon="ellipsis-v"></vt@btn>
              <vt@menu offset-y>
                <vt@tile-group>
                  <vt@tile v-for="n in 3" :key="n" @click="">
                    <vt@tile-title>Menu {{n}}</vt@tile-title>
                  </vt@tile>
                </vt@tile-group>
              </vt@menu>
            </vt@menu-fragment>
          </vt@card-title>
          <vt@card-text>
            <vt@btn info @click.stop="$refs.dialog4.show">Dialog 4</vt@btn>
          </vt@card-text>
          <vt@card-actions>
            <vt@btn text-color="info" @click.stop="$refs.dialog3.close">CLOSE</vt@btn>
          </vt@card-actions>
        </vt@card>
      </vt@dialog>
    </vt@dialog-fragment>

    <!-- dialog4 -->
    <vt@dialog-fragment>
      <vt@btn primary>Dialog 4</vt@btn>
      <vt@dialog
        ref="dialog4"
        max-width="500"
        scrollable
        persistent
      >
        <vt@card>
          <vt@card-title divider>
            Dialog 4
          </vt@card-title>
          <vt@card-text>
            <p>このダイアログはpersistent設定されてるので、バックドロップクリックやESCキーでは閉じません</p>
            <p v-for="n in 20" :key="n">テキストが入ります。</p>
          </vt@card-text>
          <vt@card-actions divider>
            <vt@spacer />
            <vt@btn text-color="info" @click.stop="$refs.dialog4.close">キャンセル</vt@btn>
            <vt@btn text-color="info" @click.stop="$refs.dialog4.close">OK</vt@btn>
          </vt@card-actions>
        </vt@card>
      </vt@dialog>
    </vt@dialog-fragment>
  </docs-example>
</template>

<script>
export default {
}
</script>
